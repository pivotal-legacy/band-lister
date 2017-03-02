#!/bin/sh

ps | grep selenium | grep -v grep | awk '{ print $1 }' | xargs kill
