@echo off
echo start......
cd D:/image-compressor
webpack --config webpack.config.js --mode production
echo end OK
pause & exit