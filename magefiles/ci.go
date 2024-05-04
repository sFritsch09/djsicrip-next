//go:build mage

package main

import (
	"context"
	"fmt"
	"os"

	"dagger.io/dagger"
	"github.com/joho/godotenv"
	"github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
	"github.com/mbndr/figlet4go"
)

// build image and push to registry
func Build() {
	ctx := context.Background()
	// initialize Dagger client
	client, err := dagger.Connect(ctx, dagger.WithLogOutput(os.Stdout))
	if err != nil {
		panic(err)
	}
	defer client.Close()
	godotenv.Load()
	// read secret from host variable
	tag := os.Getenv("REGISTRY_IMAGETAG")
	reg_user := os.Getenv("REGISTRY_USER")
	reg_pass := client.SetSecret("reg-pass", os.Getenv("REGISTRY_PASS"))
	// dockerfile code base
	contextDir := client.Host().Directory(".", dagger.HostDirectoryOpts{
		Exclude: []string{".next", "node_modules", ".env", "pb.dockerfile", ".yarnrc.yml", ".yarn", "dagger.cue", "imageBuild.txt", "magefiles", "go.*"},
	})
	// init container registry
	ctr := client.Pipeline("Build", dagger.PipelineOpts{Description: "Building Image"}).Container(dagger.ContainerOpts{Platform: "linux/amd64"}).WithRegistryAuth(tag, reg_user, reg_pass)

	figlet("Building image")
	ref, err := ctr.Build(contextDir).
		Publish(ctx, fmt.Sprintf(tag))
	if err != nil {
		panic(err)
	}

	figlet("Image Pushed")
	fmt.Printf("Published image to %s\n", ref)
}

// deploy to kubernetes - set image
func Deploy() {
	godotenv.Load()
	tag := os.Getenv("REGISTRY_IMAGETAG")
	sh.RunV("kubectl", "set", "image", "deployment", "app-djsicrip", fmt.Sprintf("app=%s", tag), "-n", "app-djsicrip")
	sh.RunV("kubectl", "rollout", "status", "deployment", "app-djsicrip", "-n", "app-djsicrip")
}

// production ready
func BuildAndDeploy() {
	mg.SerialDeps(Build)
	figlet("Deploying to K8s")
	mg.SerialDeps(Deploy)
	sh.RunV("bash", "-c", "figlet -f slant TechChase | gum style --foreground '#55b3f3' --border thick --border-foreground '#F39555' --align center --margin '1 2' --padding '2 4' --bold")
	fmt.Printf("Successfully Deployed 🚀\n\n")
}

func figlet(s string) {
	ascii := figlet4go.NewAsciiRender()

	options := figlet4go.NewRenderOptions()
	options.FontName = "slant"
	ascii.LoadFont("./")
	options.FontColor = []figlet4go.Color{
		// Colors can be given by default ansi color codes...
		figlet4go.ColorCyan,
	}
	renderStr, _ := ascii.RenderOpts(s, options)
	fmt.Println(renderStr)
}

// test dagger engine
func Test() {
	sh.RunV("echo", "test")
}
