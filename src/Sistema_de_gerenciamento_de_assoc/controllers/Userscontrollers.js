import Users from "../models/Users.js";

    async function findAll(req, res) {
        const users = await Users.findAll();
        res.json(users);
    }

    function findlogin(req, res) {
        Users.findOne(req.params.email).then((result) => res.json(Users));
    }

    function addUser(req, res) {
        Users.create({
            nome: req.body.nome,
            email: req.body.email,
        }).then((result) => res.json(result));
    }

    async function updateUser(req, res) {
        await Users.update(
            {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        Users.findByPk(req.params.id).then((result) => res.json(result));
    }

    async function deleteUser(req, res) {
        await Users.destroy({
            where: {
                id: req.params.id,
            },
        });

        Users.findAll().then((result) => res.json(result));
}

export default { findAll, addUser, findlogin, updateUser, deleteUser };