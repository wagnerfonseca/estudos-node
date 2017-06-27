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