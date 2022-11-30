import { AssocModel } from "./../database/models/assocModel";
import { Request, response, Response } from "express";
import { EmailModel } from "../database/models/emailModel";

class AssocController {
  async findAll(req: Request, res: Response) {
    const Users = await AssocModel.findAll();
    return Users.length > 0
      ? res.status(200).json(Users)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await AssocModel.findOne({
      where: {
        id: Id,
      },
    });
    return User ? res.status(200).json(User) : res.status(204).send();
  }
  async getAssocName(req: Request, res: Response) {
    const { Id } = req.params;
    const AssocName = await EmailModel.findOne({
      attributes: ['nome_assoc'],
      where: {
        id: Id,
      },
    });

    const NomeAssoc = AssocName['nome_assoc']

    const Email = await AssocModel.findOne({
      attributes: ['email'],
      where: {
        nome: NomeAssoc
      },
    });

    return Email
      ? res.status(200).json(Email)
      : res.status(204).send();

  }
  async create(req: Request, res: Response) {   
    const nome = req.body.nome
    const endereco = req.body.endereco
    const comp = req.body.comp
    const nasc = req.body.nasc
    const cep = req.body.cep
    const tel = req.body.tel
    const cpf = req.body.cpf
    const rg = req.body.rg
    const estado_cv = req.body.estado_cv
    const inst_ens = req.body.inst_ens
    const email = req.body.email
    const User = await AssocModel.create({
      nome,
      endereco,
      comp,
      nasc,
      cep,
      tel,
      cpf,
      rg,
      estado_cv,
      inst_ens,
      email
    }).then(resp =>{
      console.log("Gui")
      return resp
    }).catch(error =>{
      console.log(nome, endereco, comp, nasc, cep, tel, cpf, rg, estado_cv, inst_ens, email)
      return error
    })
  }
  async update(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await AssocModel.update({
    nome: req.body.nome,
    endereco: req.body.endereco,
    comp: req.body.comp,
    nasc: req.body.nasc,
    cep: req.body.cep,
    tel: req.body.tel,
    cpf: req.body.cpf,
    rg: req.body.rg,
    estado_cv: req.body.estado_cv,
    inst_ens: req.body.inst_ens,
    email: req.body.email,
    }, 
    {where:
    { id: Id,}})
    .then((response) => {
      console.log(response)
      console.log("Gui")
    })
    .catch((error) => {
      console.log(error)
      console.log("Gui2")
    })
  }
  async destroy(req: Request, res: Response) {
    const { Id } = req.params;
    await AssocModel.destroy({ where: 
      { id: Id,}});
      return res.status(204).send();
  }
}

export default new AssocController();
