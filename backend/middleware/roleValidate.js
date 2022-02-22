import role from "../models/role.js";


const existingRole = async (req,res,next) => {
  const roleId = await role.findOne({ name: "user" });
  if (!roleId)
    return res.status(500).send({ message: "No role was assingned" });
  req.body.role =roleId._id
  next();
};

const validateRole = async (req,res,next) => {
  const existinRole = await role.findOne({ name: req.body.name });
  if (existinRole)
    return res.status(400).send({ message: "The role is already registered" });
next();
};

export default { existingRole,validateRole };
