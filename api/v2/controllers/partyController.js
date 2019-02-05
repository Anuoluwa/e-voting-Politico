import db from '../config/connection';
import { createParty, findParty, getAllParty } from '../models/queries';
/**
 * Creates a new PartyController.
 * @class
 * @classdesc PartyController has two static methods.
 */
class Parties {
  /**
 * @method createParty
 * @static
 * @description this takes of POST party method
 * @constructor none
 * @param {object} req req object
 * @param {object} res res object
 * @returns {Object} status 409 if you already created a party with the same name
 * @returns {Object} status 200 Party created successfully
 * @returns {Object} status 500 for server error
 */
  static async createParty(req, res) {
    try {
      const userId = req.user.id;
      const {
        partyName, hqAddress, logoUrl,
      } = req.body;
      const partyNameExists = await db.query(findParty(partyName));
      if (partyNameExists.rowCount > 0) {
        return res.status(409).json({
          status: 409,
          error: 'A party is registered with this name',
        });
      }
      const newParty = {
        partyName, hqAddress, logoUrl, userId,
      };
      const addParty = await db.query(createParty(newParty));
      if (addParty.rowCount > 0) {
        return res.status(201).json({
          status: 200,
          party: addParty.rows,
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


  /**
 * @method getAllParties
 * @static
 * @description this returns all parties availabble at the time
 * @constructor none
 * @param {object} req req object
 * @param {object} res res object
 * @returns {Object} status 200 for success
 * @returns {Object} status 200 these are the available parties on the platform
 * @returns {Object} status 500 Sorry, something went wrong in returning all parties!
 */
  static async getAllParties(req, res) {
    try {
      const getOneParty = await db.query(getAllParty());
      if (getOneParty.rowCount === 0) {
        return res.status(200).json({
          status: 200,
          error: 'Sorry no party at the moment',
        });
      }
      return res.status(200).json({
        status: 200,
        data: [{ parties: getOneParty.rows }],
      });
    } catch (error) {
      console.log({ error: `${error}` });
      return res.status(500).json({
        status: 500,
        error: 'Sorry, something went wrong in getting all party!',
      });
    }
  }

  static async getOneParty(req, res) {
    res.json({ error: 'logic to get all the one party' });
  }

  static async editParty(req, res) {
    res.json({ error: 'logic to update a party' });
  }

  static async deleteParty(req, res) {
    res.json({ error: 'logic to delete a party' });
  }
}

export default Parties;
