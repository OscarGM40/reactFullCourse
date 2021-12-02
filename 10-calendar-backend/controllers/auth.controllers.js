const { response, request } = require("express");


exports.crearUsuario = (req = request, res = response) => {
  const { name, email, password } = req.body;

  if(name.length <= 5) {
    res.status(400).json({
      ok: false,
      msg: 'El nombre debe tener al menos 5 caracteres'
    });
  }
  res.json({
    ok: true,
  });
};

exports.loginUsuario = (req = request, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
  });
};

exports.revalidarToken = (req = request, res = response) => {
  res.json({
    ok: true,
  });
};
