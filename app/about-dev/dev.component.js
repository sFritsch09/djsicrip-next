"use client";
import {
  AboutContact,
  AboutContainer,
  AboutHeader,
  AboutImage,
  AboutImageWrapper,
  ReactLogo,
  StackChild,
  StackHeader,
  StackRow,
  AboutContactHeader,
} from "../../styles/about-dev.styles";
import styledLogo from "../../public/images/techstack/styledComponents-logo.png";
import nextUiLogo from "../../public/images/techstack/nextui.png";
import framerLogo from "../../public/images/techstack/framerMotion-logo.png";
import nodeLogo from "../../public/images/techstack/node-logo.webp";
import expressLogo from "../../public/images/techstack/express-logo.png";
import googleLogo from "../../public/images/techstack/google-logo.png";
import nginxLogo from "../../public/images/techstack/nginx-logo.png";
import dockerLogo from "../../public/images/techstack/docker-logo.webp";
import githubLogo from "../../public/images/techstack/github.webp";
import kubernetesLogo from "../../public/images/techstack/Kubernetes.png";
import nextLogo from "../../public/images/techstack/Next-logo.png";
import digitaloceanLogo from "../../public/images/techstack/Digitalocean-logo.png";

import { RiMailFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function Dev() {
  const socialProfile = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "DJ Si Crip - Sebastian Fritsch",
    url: "https://djsicrip.com",
    sameAs: [
      "https://www.instagram.com/djsicrip2",
      "https://www.linkedin.com/in/sebastian-fritsch-3676831bb",
      "https://github.com/sFritsch09",
    ],
  };
  const parentVariant = {
    show: {
      transition: { staggerChildren: 0.3, delayChildrend: 0.2 },
    },
  };
  const childrenVariant = {
    initial: {
      y: -60,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "backInOut",
        duration: 0.95,
      },
    },
  };

  const techStack = {
    frontend: [
      { title: "NextJS", logo: nextLogo },
      { title: "Styled Components", logo: styledLogo },
      { title: "Next UI", logo: nextUiLogo },
      { title: "Framer Motion", logo: framerLogo },
    ],
    backend: [
      { title: "Node.js", logo: nodeLogo },
      { title: "Express", logo: expressLogo },
      { title: "Google API", logo: googleLogo },
      { title: "Nginx", logo: nginxLogo },
    ],
    ciCd: [
      { title: "Github Actions", logo: githubLogo },
      { title: "Docker", logo: dockerLogo },
      { title: "Kubernetes", logo: kubernetesLogo },
      { title: "DigitalOcean", logo: digitaloceanLogo },
    ],
  };
  return (
    <div className="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialProfile) }}
      />
      <AboutContainer>
        <AboutHeader>
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>
                Sebastian Fritsch<span></span>
              </h1>
            </div>

            <div className="role">
              <div className="block"></div>
              <p>DevOps Engineer</p>
            </div>
          </div>
        </AboutHeader>
        <AboutImageWrapper>
          <AboutImage>
            <Image
              alt="me"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 20%" }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              src="https://pb.techchase.de/api/files/baa8qw390ee8nzl/wa8fenwcggn4zvr/sicrip_jAW2q750Oj.jpg"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw,18vw"
            />
          </AboutImage>
        </AboutImageWrapper>
        <div className="flex justify-center">Co-Founder of TechChase</div>
        <div className="flex justify-center">
          <Link href="https://techchase.de">
            <Image
              alt="techchase"
              src="https://pb.techchase.de/api/files/l49qxrld395hahp/wricn1c0chh267l/techchase_dark_Dlo6C0NYuF.gif"
              unoptimized
              width={450}
              height={100}
            />
          </Link>
        </div>
        <StackHeader $big>Tech Stack</StackHeader>
        <StackHeader>Frontend:</StackHeader>
        <StackRow
          border="true"
          whileInView="show"
          variants={parentVariant}
          initial="initial"
        >
          {techStack.frontend.map((frontend) => (
            <StackChild variants={childrenVariant} key={frontend.title}>
              <ReactLogo>
                <Image
                  alt={frontend.title}
                  fill
                  src={frontend.logo}
                  style={{ objectFit: "contain" }}
                />
              </ReactLogo>
              {frontend.title}
            </StackChild>
          ))}
        </StackRow>
        <StackHeader>Backend:</StackHeader>
        <StackRow
          border="true"
          whileInView="show"
          variants={parentVariant}
          initial="initial"
        >
          {techStack.backend.map((backend) => (
            <StackChild variants={childrenVariant} key={backend.title}>
              <ReactLogo>
                <Image
                  alt={backend.title}
                  fill
                  src={backend.logo}
                  style={{ objectFit: "contain" }}
                />
              </ReactLogo>
              {backend.title}
            </StackChild>
          ))}
        </StackRow>
        <StackHeader>CI/CD:</StackHeader>
        <StackRow
          border="true"
          whileInView="show"
          variants={parentVariant}
          initial="initial"
        >
          {techStack.ciCd.map((ciCd) => (
            <StackChild variants={childrenVariant} key={ciCd.title}>
              <ReactLogo>
                <Image
                  alt={ciCd.title}
                  fill
                  src={ciCd.logo}
                  style={{ objectFit: "contain" }}
                />
              </ReactLogo>
              {ciCd.title}
            </StackChild>
          ))}
        </StackRow>
        <AboutContact>
          <AboutContactHeader>
            <h1>Kontakt</h1>
          </AboutContactHeader>
          <div>
            <div>
              <RiLinkedinBoxFill size="30" />
            </div>
            <div style={{ marginLeft: "1em" }}>
              <Link
                href="https://www.linkedin.com/in/sebastian-fritsch-3676831bb"
                target="_blank"
              >
                Sebastian Fritsch
              </Link>
            </div>
          </div>
          <div>
            <div>
              <RiMailFill size="30" />
            </div>
            <div style={{ marginLeft: "1em" }}>sfritsch09@gmail.com</div>
          </div>
          <div>
            <div>
              <RiGithubFill size="30" />
            </div>
            <div style={{ marginLeft: "1em" }}>
              <Link href="https://github.com/sFritsch09" target="_blank">
                sfritsch09
              </Link>
            </div>
          </div>
        </AboutContact>
      </AboutContainer>
    </div>
  );
}
