import { UserModel } from "./../database/models/userModel";
import { Request, Response } from "express";

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
    const { email, nome, idade } = req.body;
    const User = await UserModel.create({
      email,
      nome,
      idade,
    });
    return res.status(201).json(User);
  }
  async update(req: Request, res: Response) {
    const { UserId } = req.params;
    const User = await UserModel.update(req.body, 
      {where:
    { id: UserId,}});
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    const { UserId } = req.params;
    await UserModel.destroy({ where: 
      { id: UserId,}});
      return res.status(204).send();
  }
}

export default new UserController();
