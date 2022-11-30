import { FilterLinksModel } from "../database/models/filterLinksModel";
import { Request, Response } from "express";

class FilterLinksControllers {
  async findAll(req: Request, res: Response) {
    const Users = await FilterLinksModel.findAll();
    return Users.length > 0
      ? res.status(200).json(Users)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await FilterLinksModel.findOne({
      where: {
        id: Id,
      },
    });
    return User ? res.status(200).json(User) : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    const { nome_assoc, link_pdf, dia, mes, ano, caderno, pagina } = req.body;
    const User = await FilterLinksModel.create({
      nome_assoc,
      link_pdf,
      dia,
      mes,
      ano,
      caderno,
      pagina
    });
    return res.status(201).json(User);
  }
  async update(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await FilterLinksModel.update(req.body, 
      {where:
    { id: Id,}});
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    const { Id } = req.params;
    await FilterLinksModel.destroy({ where: 
      { id: Id,}});
      return res.status(204).send();
  }
}

export default new FilterLinksControllers();
