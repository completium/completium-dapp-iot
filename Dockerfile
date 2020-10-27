FROM gitpod/workspace-full:latest
LABEL maintainer="contact@edukera.com"
RUN sudo apt-get update && sudo apt-get -y install wget netbase
RUN sudo wget -q https://github.com/serokell/tezos-packaging/releases/latest/download/tezos-client -P /usr/local/bin
RUN sudo wget -q https://github.com/edukera/archetype-lang/releases/download/1.2.1/archetype-x64-linux -P /usr/local/bin
RUN sudo ln -s /usr/local/bin/archetype-x64-linux /usr/local/bin/archetype
RUN sudo chmod +x /usr/local/bin/archetype-x64-linux /usr/local/bin/tezos-client