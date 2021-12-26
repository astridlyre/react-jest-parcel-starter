#!/usr/bin/env bash

# Edit line 103 in src and 104 in lib
find node_modules -iname '*HMRServer*' -print0 | xargs -0 vim
