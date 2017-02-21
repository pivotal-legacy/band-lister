#!/usr/bin/env bash

ps aux | grep \/usr\/bin\/java\ -Dserver.port=7070 | grep -v grep | awk '{ print $2 }' | xargs kill
