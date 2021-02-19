const AlunoDao = require('./dao/aluno-dao');

let dao = new AlunoDao();

console.log(' -------------- ')
console.log(dao.list());

console.log(' -------------- ');

let aluno = dao.findById(3);

let novoAluno = {id: 4, nome: 'Joana', curso: 'IPI'}
dao.save(novoAluno);

console.log(aluno);

console.log(' -------------- ')
console.log(dao.list());