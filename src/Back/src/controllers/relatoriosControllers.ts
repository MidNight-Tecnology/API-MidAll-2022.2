import { RelatoriosModel } from "../database/models/relatoriosModel";
import { Request, Response } from "express";

class RelatoriosControllers {
  async findAll(req: Request, res: Response) {
    const Users = await RelatoriosModel.findAll();
    return Users.length > 0
      ? res.status(200).json(Users)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await RelatoriosModel.findOne({
      where: {
        id: Id,
      },
    });
    return User ? res.status(200).json(User) : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    const { nome_do_associado, data, caderno, pagina, texto_do_bloco } = req.body;
    const User = await RelatoriosModel.create({
      nome_do_associado,
      data,
      caderno,
      pagina,
      texto_do_bloco,
    });
    return res.status(201).json(User);
  }
  async update(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await RelatoriosModel.update(req.body, 
      {where:
    { id: Id,}});
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    const { Id } = req.params;
    await RelatoriosModel.destroy({ where: 
      { id: Id,}});
      return res.status(204).send();
  }
}

export default new RelatoriosControllers();
