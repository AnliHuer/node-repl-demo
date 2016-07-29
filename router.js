let currentActionName = 'init';

const actions = [{
  name: 'init',
  help: `
    Welcome
    1 - postcode
    2 - barcode
    q - quit`.trim(),
  doAction(cmd){
    switch (cmd) {
      //switch ===匹配
      case '1':
        currentActionName = 'postcode';
        break;
      case '2':
        currentActionName = 'barcode';
        break;
      case 'q':
        process.exit();
      default:
        console.log('Input Error!');
    }
  }
}, {
  name: 'postcode',
  help: `
    Please input postcode:`.trim(),
  doAction(cmd){
    console.log('Im converting the postcode:' + cmd);
    currentActionName = 'init';
  }
}, {
  name: 'barcode',
  help: `
    Please input barcode:`.trim(),
  doAction(cmd){
    console.log('Im converting the barcode:' + cmd);
    currentActionName = 'init';
  }
}];


const router = {
  handle(cmd){
    actions.find(v => v.name === currentActionName).doAction(cmd);
  },

  start(){
    console.log(actions.find(v => v.name === currentActionName).help);
  }
};

module.exports = router;

