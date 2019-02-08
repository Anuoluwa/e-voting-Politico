import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/** @function verifyAdmin
/* @param {object} req req object
/* @param {object} res res object
/* @param {object} next res object
/* @returns {Object} res status 401 if there is no token
/* @returns {Object} status 501 server error
*/


const verifyToken = (req, res, next) => {
  if (typeof req.headers.authorization === 'undefined') {
    return res.status(400).json({
      status: 400,
      error: 'Headers key: "Authorization" and "token XXXXXXXXX" should be valid',
    });
  }
  if (req.headers.authorization === '') {
    return res.status(400).json({
      status: 400,
      error: 'Headers key: "Authorization" and "token XXXXXXXXX" should not be empty',
    });
  }
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: 401,
        error: 'Failed to authenticate token',
      });
    }
    req.user = decoded;
    next();
  });
};

export default verifyToken;
