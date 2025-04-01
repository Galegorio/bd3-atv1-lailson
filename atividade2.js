use("BD3-NoSQL-AtlasMongoDB");

db.createCollection("bd3-nosql-atv2");

// Inserir 50 alunos com os campos corretos (gerados por IA ou script externo)
db.getCollection("bd3-nosql-atv2").insertMany([
    { cod_aluno: 1, cod_turma: 101, nome: "João Silva", cpf: "12345678900", rg: "123456789", telefone_aluno: "11987654321", telefone_responsavel: "11987654322", email: "joao@gmail.com", data_nascimento: new Date("2003-05-20") },
    { cod_aluno: 2, cod_turma: 102, nome: "Maria Oliveira", cpf: "23456789011", rg: "234567890", telefone_aluno: "11987654323", telefone_responsavel: "11987654324", email: "maria@hotmail.com", data_nascimento: new Date("2001-09-15") },
    { cod_aluno: 3, cod_turma: 103, nome: "Carlos Souza", cpf: "34567890122", rg: "345678901", telefone_aluno: "11987654325", telefone_responsavel: "11987654326", email: "carlos@gmail.com", data_nascimento: new Date("2002-12-10") },
    { cod_aluno: 4, cod_turma: 104, nome: "Ana Lima", cpf: "45678901233", rg: "456789012", telefone_aluno: "11987654327", telefone_responsavel: "11987654328", email: "ana@gmail.com", data_nascimento: new Date("2000-07-22") },
    { cod_aluno: 5, cod_turma: 105, nome: "Pedro Santos", cpf: "56789012344", rg: "567890123", telefone_aluno: "11987654329", telefone_responsavel: "11987654330", email: "pedro@yahoo.com", data_nascimento: new Date("1999-03-18") },
    // Adicionar mais 45 registros gerados automaticamente
]);

// Atualizar todos os dados de um aluno pelo código
db.getCollection("bd3-nosql-atv2").updateOne(
    { cod_aluno: 1 }, // Critério
    { $set: { nome: "João Pedro Silva", cpf: "12345678999", telefone_aluno: "11999999999" } }
);

// Excluir aluno pelo código
db.getCollection("bd3-nosql-atv2").deleteOne({ cod_aluno: 2 });

// Listar todos os alunos que possuam e-mail no domínio "@gmail.com"
db.getCollection("bd3-nosql-atv2").find({ email: /@gmail\.com$/ });
