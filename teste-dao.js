const AlunoDao = require('./dao/aluno-dao');

let dao = new AlunoDao();

dao.findById().then((result) => {

if(result.length > 0){

    console.log(result);

    console.log(result.length);
    console.log(' --------------- ')
    console.log(result[0])
    console.log(aluno)
    console.log(aluno.nome)
}else{
    console.log('Não foi encontrado resultado')
}


}).catch((err) => {
    console.log(err);
});


