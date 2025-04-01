// Conectar ao banco de dados "BD3-NoSQL-AtlasMongoDB"
use("BD3-NoSQL-AtlasMongoDB");

// Criar a coleção "bd3-nosql-atv1"
db.getCollection("bd3-nosql-atv1").drop(); // Remover dados anteriores

db.createCollection("bd3-nosql-atv1");

// Inserir 10 alunos com os campos corretos
db.getCollection("bd3-nosql-atv1").insertMany([
    { cod_aluno: 1, cod_turma: 101, nome: "João Silva", cpf: "12345678900", rg: "123456789", telefone_aluno: "11987654321", telefone_responsavel: "11987654322", email: "joao@email.com", data_nascimento: new Date("2003-05-20") },
    { cod_aluno: 2, cod_turma: 102, nome: "Maria Oliveira", cpf: "23456789011", rg: "234567890", telefone_aluno: "11987654323", telefone_responsavel: "11987654324", email: "maria@email.com", data_nascimento: new Date("2001-09-15") },
    { cod_aluno: 3, cod_turma: 103, nome: "Carlos Souza", cpf: "34567890122", rg: "345678901", telefone_aluno: "11987654325", telefone_responsavel: "11987654326", email: "carlos@email.com", data_nascimento: new Date("2002-12-10") },
    { cod_aluno: 4, cod_turma: 104, nome: "Ana Lima", cpf: "45678901233", rg: "456789012", telefone_aluno: "11987654327", telefone_responsavel: "11987654328", email: "ana@email.com", data_nascimento: new Date("2000-07-22") },
    { cod_aluno: 5, cod_turma: 105, nome: "Pedro Santos", cpf: "56789012344", rg: "567890123", telefone_aluno: "11987654329", telefone_responsavel: "11987654330", email: "pedro@email.com", data_nascimento: new Date("1999-03-18") },
    { cod_aluno: 6, cod_turma: 106, nome: "Fernanda Costa", cpf: "67890123455", rg: "678901234", telefone_aluno: "11987654331", telefone_responsavel: "11987654332", email: "fernanda@email.com", data_nascimento: new Date("2003-11-05") },
    { cod_aluno: 7, cod_turma: 107, nome: "Lucas Mendes", cpf: "78901234566", rg: "789012345", telefone_aluno: "11987654333", telefone_responsavel: "11987654334", email: "lucas@email.com", data_nascimento: new Date("2002-06-30") },
    { cod_aluno: 8, cod_turma: 108, nome: "Juliana Ribeiro", cpf: "89012345677", rg: "890123456", telefone_aluno: "11987654335", telefone_responsavel: "11987654336", email: "juliana@email.com", data_nascimento: new Date("2001-02-14") },
    { cod_aluno: 9, cod_turma: 109, nome: "Rafael Almeida", cpf: "90123456788", rg: "901234567", telefone_aluno: "11987654337", telefone_responsavel: "11987654338", email: "rafael@email.com", data_nascimento: new Date("1998-12-25") },
    { cod_aluno: 10, cod_turma: 110, nome: "Carolina Ferreira", cpf: "01234567899", rg: "012345678", telefone_aluno: "11987654339", telefone_responsavel: "11987654340", email: "carolina@email.com", data_nascimento: new Date("2000-08-09") }
]);

// Listar todos os alunos
db.getCollection("bd3-nosql-atv1").find({});

// Listar um aluno pelo CPF sem o campo "cod_aluno"
db.getCollection("bd3-nosql-atv1").findOne({ cpf: "12345678900" }, { cod_aluno: 0 });

// Listar um aluno pelo CPF sem o campo "cod_aluno" e sem o campo de código (_id)
db.getCollection("bd3-nosql-atv1").findOne({ cpf: "12345678900" }, { cod_aluno: 0, _id: 0 });
