

const { response } = require('express');
const jwt = require('jsonwebtoken');

exports.validarJWT = (req, res= response, next) => {
    const token = req.headers['x-token'];

     if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    ok: false,
                    mensaje: 'Token proveido no válido',
                    errors: err
                });
            }
            req.uid = decoded.uid;
            req.name = decoded.name;
            next();
        });
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'Token no proveído',
            errors: { message: 'No token provided' }
        });
    }
}