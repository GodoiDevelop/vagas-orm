// Importar a conexão do banco de dados
import { Vaga } from "../models/vaga.js";

const criarVaga = async (req, res) => {
  try {
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    if (!titulo || !descricao || !cargo || !cidade || !salario) {
      return res.status(404).send({ mensagem: "Favor completar o cadastro" });
    }
    // Montar comando de INSERT
    // await conexao.query(`INSERT INTO filmes (titulo, categoria) VALUES ('${titulo}', '${categoria}')`)
    const vaga = await Vaga.create({
      titulo,
      descricao,
      cargo,
      cidade,
      salario,
    });

    res.status(201).send({ vaga });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ mensagem: "Erro interno" });
  }
};

const listarVaga = async (req, res) => {
  try {
    // Rodar um comando de SELECT no banco de dados
    const resultado = await Vaga.findAll();
    res.status(200).send({ resultado: resultado });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ mensagem: "Erro interno" });
  }
};

const listarVagaPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await Vaga.findAll({ where: { id } });
    res.status(200).send({ mensagem: resultado });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ mensagem: "Erro interno" });
  }
};

const atualizarVaga = async (req, res) => {
  try {
    const id = req.params.id;
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    // const resultado = await conexao.query(`UPDATE filmes SET titulo = '${titulo}', categoria = '${categoria}' WHERE id = ${id}`)
    const resultado = await Vaga.update(
      { titulo, descricao, cargo, cidade, salario },
      { where: { id } }
    );
    res.status(200).send({ mensagem: resultado });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ mensagem: "Erro interno" });
  }
};

const apagarVaga = async (req, res) => {
  try {
    const id = req.params.id;
    // await conexao.query(`DELETE FROM filmes WHERE id = ${id}`)
    await Vaga.destroy({ where: { id } });
    res.status(200).send({ mensagem: "Vaga apagada com sucesso" });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ mensagem: "Erro interno" });
  }
};

const listarVagaPorCargo = async (req, res) => {
  try {
    const cargo = req.params.cargo;
    // const { categoria } = req.params
    // Rodar um comando de SELECT no banco de dados
    // const resultado = await conexao.query(`SELECT * FROM filmes WHERE categoria = '${categoria}'`)
    const resultado = await Vaga.findAll({ where: { cargo } });
    console.log(resultado);
    res.status(200).send({ resultado: resultado });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ mensagem: "Erro interno" });
  }
};

const listarVagaPorCidade = async (req, res) => {
  try {
    const cidade = req.params.cidade;
    // const { categoria } = req.params
    // Rodar um comando de SELECT no banco de dados
    // const resultado = await conexao.query(`SELECT * FROM filmes WHERE categoria = '${categoria}'`)
    const resultado = await Vaga.findAll({ where: { cidade } });
    console.log(resultado);
    res.status(200).send({ resultado: resultado });
  } catch (erro) {
    console.log(erro);
    res.status(500).send({ mensagem: "Erro interno" });
  }
};

// Exportar controllers para importar nas rotas
export {
  criarVaga,
  listarVaga,
  listarVagaPorId,
  atualizarVaga,
  apagarVaga,
  listarVagaPorCargo,
  listarVagaPorCidade,
};
