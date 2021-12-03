const router = require("express").Router();
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth.controllers");

const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");
const Usuario = require("../models/Usuario");

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),

    check("email")
      .matches(/.+\@.+\..+/)
      .withMessage("El email debe contener '@' y '.'")
      .isLength({
        min: 6,
        max: 50,
      })
      .withMessage("El email debe contener entre 6 y 50 caracteres")
      .isEmail()
      .normalizeEmail()
      .withMessage("El email debe ser un email valido")
      .custom(async (value) => {
        const emailExists = await Usuario.findOne({ email: value });
        if (emailExists) {
          return Promise.reject("El email ya existe");
          //  throw new Error("El email ya esta registrado");
        }
      })
      .withMessage("El email ya esta registrado.Desde el custom"),
    check("password")
      .notEmpty()
      .withMessage("El password es requerido")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
      .withMessage(
        "La password debe tener al menos una mayúscula,una minúscula,un número y 8 caracteres de longitud"
      ),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check(
      "password",
      "La contraseña debe tener al menos 6 caracteres"
    ).isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);

router.get(
  "/renew",
  [check("token", "El token es obligatorio").not().isEmpty(), validarCampos],
  revalidarToken
);

module.exports = router;
