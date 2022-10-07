import { PdfModel } from "../database/models/pdfModel";
import { Request, Response } from "express";

class PdfController {
  async findAll(req: Request, res: Response) {
    const Users = await PdfModel.findAll();
    return Users.length > 0
      ? res.status(200).json(Users)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await PdfModel.findOne({
      where: {
        id: Id,
      },
    });
    return User ? res.status(200).json(User) : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    const { nome_assoc, link_pdf, link_pdf_filtrado } = req.body;
    const User = await PdfModel.create({
      nome_assoc,
      link_pdf,
      link_pdf_filtrado,
    });
    return res.status(201).json(User);
  }
  async update(req: Request, res: Response) {
    const { Id } = req.params;
    const User = await PdfModel.update(req.body, 
      {where:
    { id: Id,}});
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    const { Id } = req.params;
    await PdfModel.destroy({ where: 
      { id: Id,}});
      return res.status(204).send();
  }
}

export default new PdfController();
