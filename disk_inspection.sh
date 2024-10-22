#!/bin/bash

function inspect() {
    while true; do
        timestamp=$(date +%s)
        cpu_utilization=$(ps -A -o %cpu | awk '{s+=$1} END {print s}')
        memory_utilization=$(ps -A -o %mem | awk '{m+=$1} END {print m}')
        echo "$timestamp;$cpu_utilization;$memory_utilization;" >> inspection_result.csv
        sleep 300
    done
}
export -f inspect

function start() {
    nohup bash -c inspect > /dev/null 2>&1 &
    echo "Starting inspection... PID=$!"
    echo $! > current_pid
}

function status() {
    if pid=$(cat current_pid); then 
        if ps -p $(cat current_pid) > /dev/null 2>&1; then
            echo "Inspection is running"
        else 
            echo "Inspection is not running"
        fi
    fi
}

function kill_subprocesses() {
    local pid_to_kill="$1"
    if childs="$(pgrep -P "$pid_to_kill")"; then
        for child in $childs; do
            kill_subprocesses "$child"
        done
    fi
    if ps -p $pid_to_kill > /dev/null 2>&1; then 
        kill -9 "$pid_to_kill"
    fi
}

function stop() {
    echo "Stopping inspection..."
    if pid=$(cat current_pid); then 
        kill_subprocesses $pid
    fi
    echo "Done"
}

function help() {
    echo "usage: $0 START | STATUS | STOP"
}

case $1 in
"START") 
    start
    ;;
"STATUS") 
    status
    ;;
"STOP") 
    stop
    ;;
*)
    help
    ;;
esac
