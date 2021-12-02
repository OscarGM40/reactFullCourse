const { crearUsuario, loginUsuario, revalidarToken } = require("../controllers/auth.controllers");



const router = require("express").Router();


router.post("/new", crearUsuario);

router.post("/", loginUsuario);

router.get("/renew", revalidarToken);

module.exports = router;
