IMAGE_NAME = orlovaleksei/my_simple_docker_image
TAG = 1.0.0
CONTAINER_NAME = my-nginx-container

.PHONY: build push run

build:
	docker build -t $(IMAGE_NAME):$(TAG) .

push:
	docker push $(IMAGE_NAME):$(TAG)

run:
	docker run -it --rm -d -p 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(TAG)