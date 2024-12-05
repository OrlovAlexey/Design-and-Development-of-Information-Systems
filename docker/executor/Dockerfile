FROM ubuntu:latest
RUN apt-get update && \
    apt-get install python3-pip git curl -y
RUN pip3 install --upgrade virtualenv --break-system-packages && \
    pip3 install ansible --break-system-packages && \
    apt install openssh-server openssh-client -y && \
    apt install sshpass -y && \
    apt install net-tools

RUN apt install -y apt-transport-https ca-certificates curl software-properties-common && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null && \
    apt update && \
    apt install -y docker-ce docker-ce-cli containerd.io

RUN curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose && \
    ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

RUN mkdir -p /root/.ssh && \
    echo "HOST *" > /root/.ssh/config && echo " StrictHostKeyChecking no" >> /root/.ssh/config

WORKDIR /

CMD tail -f /dev/null