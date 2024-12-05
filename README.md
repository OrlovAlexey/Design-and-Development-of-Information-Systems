# Task 2
#### Start
Execute `./run.sh` \
It will create network, volume, two images and two containers. \
After it will run 3 playbooks:
- `put_service.yml`: Executes on puller, pulls project from github and puts it in common volume.
- `fetch_service.yml`: Executes on executor, copies application from common volume to local dir.
- `run_service.yml`: Executes om executor, install dependencies and runs the app.