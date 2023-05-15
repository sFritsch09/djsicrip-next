FROM alpine:latest

ARG PB_VERSION=0.15.3
ARG DOMAINLIST="*.djsicrip.com,djsicrip.com,xn--teichland-kapitne-4qb.de,*.xn--teichland-kapitne-4qb.de,teichland-kapitäne.de"

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

EXPOSE 8080

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]