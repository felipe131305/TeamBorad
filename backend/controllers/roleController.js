import role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400), send({ message: "Incoplete data" });

  let roleSchema = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  let result = await roleSchema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register role" });
  return res.status(200).send({ result });
};

const listRole = async (req, res) => {
  let roles = await role.find();
  if (roles.length === 0)
    return res.status(400).send({ message: "no search roles" });
  return res.status(200).send({ roles });
};
export default { registerRole, listRole };
