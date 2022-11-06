import { UserModel } from "./../database/models/userModel";
import { Request, Response } from "express";
import emailControllers from "./emailControllers";

class UserController {
  async findAll(req: Request, res: Response) {
    const Users = await UserModel.findAll();
    return Users.length > 0
      ? res.status(200).json(Users)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { UserId } = req.params;
    const User = await UserModel.findOne({
      where: {
        id: UserId,
      },
    });
    return User ? res.status(200).json(User) : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    const User = await UserModel.create({
      nome,
      email,
      senha,
    });
    return res.status(201).json(User);
  }
  async update(req: Request, res: Response) {
    const { UserId } = req.params;
    const User = await UserModel.update(req.body,
      {
        where:
          { id: UserId, }
      });
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    const { UserId } = req.params;
    await UserModel.destroy({
      where:
        { id: UserId, }
    });
    return res.status(204).send();
  }
  async userauth(req: Request, res: Response) {
    const { email, senha } = req.body;
    const resp = await UserModel.findOne({
      where: {
        email: email,
        senha: senha
      }
    });
    if (resp) {
      return res.status(201).send(resp);
    } else {
      return res.status(404).send()
    }
  }
}


export default new UserController();
