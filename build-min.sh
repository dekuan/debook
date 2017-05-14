#!/usr/bin/env bash

java -jar "tools/yuicompressor-2.4.8.jar" "dist/js/jquery-edition/load-toast.js" -o "dist/js/jquery-edition/load-toast.min.js" --charset utf-8
java -jar "tools/yuicompressor-2.4.8.jar" "dist/js/jquery-edition/msg-confirm.js" -o "dist/js/jquery-edition/msg-confirm.min.js" --charset utf-8
java -jar "tools/yuicompressor-2.4.8.jar" "dist/js/jquery-edition/msg-page.js" -o "dist/js/jquery-edition/msg-page.min.js" --charset utf-8
java -jar "tools/yuicompressor-2.4.8.jar" "dist/js/jquery-edition/top-toast.js" -o "dist/js/jquery-edition/top-toast.min.js" --charset utf-8
java -jar "tools/yuicompressor-2.4.8.jar" "dist/js/jquery-edition/delib.js" -o "dist/js/jquery-edition/delib.min.js" --charset utf-8

java -jar "tools/yuicompressor-2.4.8.jar" "dist/style/main.css" -o "dist/style/main.min.css" --charset utf-8
