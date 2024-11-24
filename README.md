# Task 4
## Java project build using Jenkins with Sonarqube, Docker deploy and Allure

В качестве собираемого приложения выбрал домашку по джаве. Контейнер с дженкинсом пришлось модифицировать чтобы там работал докер.

## Скрины:
#### Параметры Tools:
![sonarqube settings](img/sonarqube_settings.png)
![maven settings](img/maven_settings.png)
![docker settings](img/docker_settings.png)
![allure settings](img/allure_settings.png)

#### Параметры System:
![sonarqube server settings](img/sonarqube_server_settings.png)

#### Параметры пайплайна:
![sonarqube job settings](img/job_sonarqube.png)
![maven job settings](img/job_maven.png)
![git job settings](img/job_git.png)
![docker job settings](img/job_docker.png)
![allure job settings](img/job_allure.png)

#### Лог пайплайна:
![maven job log](img/maven_tests_success.png)
![docker job log](img/docker_build_and_push_success.png)
![allure job log](img/allure_success.png)

#### Результат сборки и покрытие кода:
![sonarqube report](img/sonarqube_report.png)
![allure report](img/allure_report.png)
![jenkins report](img/jenkins_final.png)