import { validacionVeterinario } from "../middlewares/validacionVeterinario.js";

router.post("/registro", validacionVeterinario, registro);