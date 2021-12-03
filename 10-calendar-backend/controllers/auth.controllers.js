const { response, request } = require("express");
const Usuario = require("../models/Usuario");


exports.crearUsuario = async (req = request, res = response) => {
  const { name, email, password } = req.body;

  try {
    // revisar si existe el usuario
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

    usuario = new Usuario(req.body)
    await usuario.save();

    res.status(201).json({
      ok: true,
      uid:usuario.id,
      name:usuario.name
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
}; 


exports.loginUsuario = async (req = request, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
  });
};

exports.revalidarToken = async (req = request, res = response) => {
  res.json({
    ok: true,
  });
};
