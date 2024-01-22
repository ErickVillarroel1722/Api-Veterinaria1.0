import { Router } from "express";
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';
const router = Router();
import {
	detalleTratamiento,
	registrarTratamiento,
	actualizarTratamiento,
	eliminarTratamiento,
	cambiarEstado,
} from "../controllers/tratamiento_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";
import { validacionTratamiento } from "../middlewares/validacionTratamiento.js";

router.post("/tratamiento/registro", verificarAutenticacion, validacionTratamiento, registrarTratamiento);
router
	.route("/tratamiento/:id")
	.get(verificarAutenticacion, detalleTratamiento)
	.put(verificarAutenticacion, actualizarTratamiento)
	.delete(verificarAutenticacion, eliminarTratamiento);

router.put("/tratamiento/estado/:id", verificarAutenticacion, cambiarEstado);
router.put("/tratamiento/estado/:id", cambiarEstado);
router.get("/tratamiento/:id", (req, res) => res.send("Detalle del tratamiento"));
router.put("/tratamiento/:id", (req, res) => res.send("Actualizar tratamiento"));
router.delete("/tratamiento/:id", (req, res) => res.send("Eliminar tratamiento"));
router.post("/tratamiento/estado/:id", (req, res) => res.send("Listar tratamientos"));
router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)

export default router;