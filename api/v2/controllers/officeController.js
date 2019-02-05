import db from '../config/connection';
import { createOffice, findOffice } from '../models/queries';
/**
 * Creates a new OfficeController.
 * @class
 * @classdesc OfficeController has static methods.
 */
class Offices {
  /**
 * @method createOffice
 * @static
 * @description this takes of POST office method
 * @constructor none
 * @param {object} req req object
 * @param {object} res res object
 * @returns {Object} status 409 if you already created a office with the same name
 * @returns {Object} status 200 Office created successfully
 * @returns {Object} status 500 for server error
 */
  static async createOffice(req, res) {
    try {
      const userId = req.user.id;
      const {
        type, officeName,
      } = req.body;
      const officeExists = await db.query(findOffice(type));
      if (officeExists.rowCount > 0) {
        return res.status(409).json({
          status: 409,
          error: 'A office is registered with this name',
        });
      }
      const newOffice = {
        type, officeName, userId,
      };
      const addOffice = await db.query(createOffice(newOffice));
      if (addOffice.rowCount > 0) {
        return res.status(201).json({
          status: 200,
          office: addOffice.rows,
        });
      }
    } catch (error) {
      console.log({ message: `${error}` });
      return res.status(500).json({
        status: 500,
        error: 'Sorry, something went wrong, try again!',
      });
    }
  }

  static async getOffices(req, res) {
    res.json({ message: 'logic to get all the offices goes here' });
  }

  static async getOneOffice(req, res) {
    res.json({ message: 'logic to get an offices goes here' });
  }
}

export default Offices;
