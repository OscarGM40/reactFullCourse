





const jwt = require('jsonwebtoken');

const generarJWT = (uid,name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid,name };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                reject('Error generando el token');
            } else {
                resolve(token);
            }
        });
    });
} 

module.exports = {
    generarJWT
};