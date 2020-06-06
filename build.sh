#!/bin/bash
set -e

# Build the project
yarn
hugo --baseURL https://hymnsrepo.com
gulp generate-sw
mkdir ./public/api
yarn generate-apis
