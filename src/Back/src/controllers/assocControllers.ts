import { AssocModel } from "./../database/models/assocModel";
import { Request, Response } from "express";

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
  async create(req: Request, res: Response) {
    const { nome, endereco, comp, nasc, cep, tel, cpf, rg, estado_cv, inst_ens, email } = req.body;
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
    });
    return res.status(201).json(User);
  }
  async update(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await AssocModel.update(req.body, 
      {where:
    { id: Id,}});
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    const { Id } = req.params;
    await AssocModel.destroy({ where: 
      { id: Id,}});
      return res.status(204).send();
  }
}

export default new AssocController();
