FROM ubuntu:latest
RUN apt-get update && \
    apt-get install python3-pip git curl -y
RUN pip3 install --upgrade virtualenv --break-system-packages && \
    pip3 install ansible --break-system-packages && \
    apt install openssh-server openssh-client -y && \
    apt install sshpass -y && \
    apt install net-tools

RUN mkdir -p /root/.ssh && \
    echo "HOST *" > /root/.ssh/config && echo " StrictHostKeyChecking no" >> /root/.ssh/config

WORKDIR /

CMD tail -f /dev/null