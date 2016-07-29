'use strict';

const repl = require('repl');
const router = require('./router');

router.start();

repl.start({prompt: '>', eval: handleInput});


function handleInput(cmd, context, filename, calback) {
  //cmd: 命令行输入内容
  //callback: 命令行状态切换到等待用户输入
  router.handle(cmd.trim());
  router.start();

  calback();
}