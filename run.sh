echo "Creating network..."
docker network create internal-net > /dev/null

echo "Creating volume..."
docker volume create common-dir > /dev/null

echo "Building puller..."
docker build -f ./docker/puller/Dockerfile -t puller-image .

echo "Starting puller..."
docker-compose up -d puller

echo "Building executor..."
docker build -f ./docker/executor/Dockerfile -t executor-image .

echo "Starting executor..."
docker-compose up -d executor

# Пуллим приложение и кладем в общий volume
docker exec -it puller sh -c "ansible-playbook /ansible/playbooks/put_service.yml" 

# Копируем из общего volume в executor
docker exec -it executor sh -c "ansible-playbook /ansible/playbooks/fetch_service.yml" 

# Устанавливаем зависимости, запускаем приложение
docker exec -it executor sh -c "ansible-playbook /ansible/playbooks/run_service.yml" 


