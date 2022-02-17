import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const resgisterUser = async (req, res) => {
  if (!req.body.name || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });

  const passHash = await bcrypt.hash(req.body.password, 10);

  const userSchema = new user({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    role: req.body.role,
    dbStatus: true,
  });

  const result = await userSchema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register user" });
  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          role: result.role,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (error) {
    return res.status(500).send({ message: " Register Error" });
  }
};

const listUser = async (req, res) => {
  let users = await user.find();
  if (users.length === 0)
    return res.status(400).send({ message: "No serach results" });
  return res.status(200).send({ users });
};

export default { resgisterUser, listUser };
