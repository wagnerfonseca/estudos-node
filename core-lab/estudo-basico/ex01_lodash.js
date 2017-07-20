const  _ = require('lodash');

const alunos = [
	{
		nome: 'Kefas',
		nota: 6.1
	},
	{
		nome: 'Yachov',
		nota: 9.8
	},
	{
		nome: 'Yochanan',
		nota: 8.1 
	}
];

const media = _.sumBy(alunos, 'nota') / alunos.length;
console.log(media);


var obj = {key1: "value1", key2: "value2"};
var obj2 = {key4: "new value"};
var obj3 = {key5: "value5"};
_.merge(obj, obj2, obj3);
console.log('Merge 1', obj);
// → Merge 1 { key1: 'value1', key2: 'value2', key4: 'new value', key5: 'value5' }


// _.extend / _.assign
var obj21 = {key1: "value1", key2: "value2"};
var obj22 = {key2:"value4", key3: "value3", key4: undefined};
var obj23 = {key5: "value5"};

_.extend(obj21, obj22, obj23);
console.log(obj21);
// → {key1: "value1", key2: "value4", key3: "value3", key4: undefined, key5: 'value5'}


// _.defaults
var obj31 = {key3: "value3", key5: "value5"};
var obj32 = {key1: "value1", key2:"value2", key3: "valueDefault", key4: "valueDefault", key5: undefined};
_.defaults(obj31, obj32);
console.log(obj31);
console.log(obj32);