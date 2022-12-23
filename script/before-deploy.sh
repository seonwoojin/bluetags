## before_install.sh ##

#!/bin/bash

# 기존 폴더 내용 삭제
if [ -d "/home/ubuntu/build"]; then rm -Rf "/home/ubuntu/build"; fi