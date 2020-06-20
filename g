#!/usr/bin/env bash
pm2 stop hexo
npx hexo clean
npx hexo generate
pm2 start hexo

