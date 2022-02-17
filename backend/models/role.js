// se realiza las colecciones que estaran en mongoDB importando la libreria mongoose y creando el esquema json
import mongoose from "mongoose";
const roleSchema = new mongoose.Schema({
  name: String,
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});
// busca o crea la coleccion de roles y envia rolSchemas
const role = mongoose.model("roles", roleSchema);
export default role;
