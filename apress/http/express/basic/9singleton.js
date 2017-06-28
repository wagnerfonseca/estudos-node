const express1 = require('express')
const express2 = require('express')

console.log('Os dois obj são extritamente iguais?', express1 === express2)

const server1 = express1();
const server2 = express1();
console.log('Os dois obj ref a express1() são extritamente iguais?', server1 === server2)

const routes1 = express1.Router();
const routes2 = express1.Router();
console.log('Os dois obj ref a express1.Router() são extritamente iguais?', routes1 === routes2)