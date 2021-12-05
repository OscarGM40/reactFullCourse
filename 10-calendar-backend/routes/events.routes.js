const router = require("express").Router();
const { param, body, check, header } = require("express-validator");

/* imports relativos at bottom */
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events.controllers");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validarCampos");
const { validarJWT } = require("../middlewares/validarJWT");

/* middleware en un nivel superior saiyajin level 6 aplica a todo lo que tenga debajo-secuencialmente */
router.use(validarJWT);

router.get("/", getEventos);

router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").not().isEmpty(),
    body("start", "debe ser una fecha válida").custom(isDate),
    check("end", "La fecha de fin es obligatoria").not().isEmpty(),
    body("end", "debe ser una fecha válida").custom(isDate),
    header("x-token", "debe venir un token en el header").not().isEmpty(),
    validarCampos,
  ],
  crearEvento
);

router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").not().isEmpty(),
    body("start", "debe ser una fecha válida").custom(isDate),
    check("end", "La fecha de fin es obligatoria").not().isEmpty(),
    body("end", "debe ser una fecha válida").custom(isDate),
    header("x-token", "debe venir un token en el header").not().isEmpty(),
    param("id").isMongoId().withMessage("El id debe ser un MongoID correcto"),
    validarCampos,
  ],
  actualizarEvento
);

router.delete(
  "/:id",
  [
    param("id").isMongoId().withMessage("El id debe ser un MongoID correcto"),
    validarCampos,
  ],
  eliminarEvento
);

module.exports = router;
