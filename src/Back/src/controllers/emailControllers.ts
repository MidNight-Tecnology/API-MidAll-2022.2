import { EmailModel } from "../database/models/emailModel";
import { Request, Response } from "express";

class EmailController {
  async findAll(req: Request, res: Response) {
    const Email = await EmailModel.findAll();
    return Email.length > 0
      ? res.status(200).json(Email)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { Id } = req.params;
    const Email = await EmailModel.findOne({
      where: {
        id: Id,
      },
    });
    return Email ? res.status(200).json(Email) : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    const { nome_assoc, assunto, email, dia, mes, ano, caderno, pagina } = req.body;
    const Email = await EmailModel.create({
      nome_assoc,
      assunto,
      email,
      dia,
      mes,
      ano,
      caderno,
      pagina
    });
    return res.status(201).json(Email);
  }
  async update(req: Request, res: Response) {
    const { Id } = req.params;
    const Email = await EmailModel.update(req.body, 
      {where:
    { id: Id,}});
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    const { Id } = req.params;
    await EmailModel.destroy({ where: 
      { id: Id,}});
      return res.status(204).send();
  }
}

export default new EmailController();
