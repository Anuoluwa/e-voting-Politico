import jwt from 'jsonwebtoken';
import db from '../config/connection';
import PasswordHelper from '../helpers/passwordHelper';
import { createUserAccount, checkUser, findUser } from '../models/queries';

/**
 * Creates a new AuthController.
 * @class
 * @classdesc AuthController has two static methods: signup and login.
 */
export default class AuthController {
  /**
 * @method signUp
 * @static
 * @description this takes care of user registration
 * @constructor none
 * @param {object} req req object
 * @param {object} res res object
 * @returns {Object} status 409 if user already exists with message
 * @returns {Object} status 501 if new user record cannot be implemented with message
 * @returns {Object} status 200 if new user registration is successful with message and users' data
 * @returns {Object} status 500 for server error
 */
  static async signUp(req, res) {
    try {
      const {
        firstname, lastname, othername, address, phoneNumber, passportUrl, email, password,
      } = req.body;
      const userExists = await db.query(checkUser(firstname, email));
      if (userExists.rowCount > 0) {
        return res.status(409).json({
          status: '409',
          message: 'user already exists',
        });
      }
      const hashedPassword = await PasswordHelper.hashPassword(password);
      const newUser = {
        firstname,
        lastname,
        othername,
        address,
        phoneNumber,
        passportUrl,
        email,
        hashedPassword,
      };
      const createUser = await db.query(createUserAccount(newUser));
      if (createUser.rowCount === 0) {
        return res.status(501).json({
          status: '501',
          message: 'user not created',
        });
      }
      const token = jwt.sign(
        {
          id: createUser.rows[0].id,
          firstname: createUser.rows[0].firstname,
          lastname: createUser.rows[0].lastname,
          othername: createUser.rows[0].othername,
          address: createUser.rows[0].address,
          phoneNumber: createUser.rows[0].phoneNumber,
          passportUrl: createUser.rows[0].passportUrl,
          email: createUser.rows[0].email,
          admin: createUser.rows[0].isAdmin,
        },
        process.env.SECRET_KEY, { expiresIn: 86400 },
      );
      const data = {
        token,
        user: {
          id: createUser.rows[0].id,
          firstname: createUser.rows[0].firstname,
          lastname: createUser.rows[0].lastname,
          othername: createUser.rows[0].othername,
          address: createUser.rows[0].address,
          phoneNumber: createUser.rows[0].phoneNumber,
          passportUrl: createUser.rows[0].passportUrl,
          email: createUser.rows[0].email,
        },
      };
      return res.status(201).json({
        status: 201,
        data: [data],
      });
    } catch (error) {
      console.log([{ error: `${error}` }]);
      return res.status(500).json([{
        status: '500',
        message: 'Oops, something went wrong, try again!',
      }]);
    }
  }


  /**
 * @method login
 * @static
 * @description this login implementation for returning users
 * @constructor none
 * @param {object} req req object
 * @param {object} res res object
 * @returns {Object} res status 404 if user could not be found with message
 * @returns {Object} status 400 if password is wrong
 * @returns {Object} status 200 for successful login with message and users' data
 * @returns {Object} status 500 for server error
 */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const getUser = await db.query(findUser(email));
      if (getUser.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Invalid email or password!',
        });
      }
      const validatePassword = await PasswordHelper
        .verifyPassword(password, getUser.rows[0].password);
      if (validatePassword === false) {
        return res.status(400).json({
          status: 400,
          error: 'Wrong email or password',
        });
      }
      const token = jwt.sign(
        {
          id: getUser.rows[0].id,
          firstname: getUser.rows[0].firstname,
          lastname: getUser.rows[0].lastname,
          othername: getUser.rows[0].othername,
          address: getUser.rows[0].address,
          phoneNumber: getUser.rows[0].phoneNumber,
          passportUrl: getUser.rows[0].passportUrl,
          email: getUser.rows[0].email,
          isAdmin: getUser.rows[0].isAdmin,
        },
        process.env.SECRET_KEY, { expiresIn: 86400 },
      );
      const data = {
        token,
        firstname: getUser.rows[0].firstname,
        lastname: getUser.rows[0].firstname,
        othername: getUser.rows[0].othername,
        email: getUser.rows[0].email,
        admin: getUser.rows[0].admin,
      };
      return res.status(200).json({
        status: 200,
        data: [token],
      });
    } catch (error) {
      console.log({ message: `${error}` });
      return res.status(500).json({
        status: 500,
        error: 'Oops, something went wrong, try again!',
      });
    }
  }
}
