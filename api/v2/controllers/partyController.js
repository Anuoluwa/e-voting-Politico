import db from '../config/connection';
import {
  createParty,
  findParty,
  getAllParty, findPartyById,
} from '../models/queries';
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

  /**
 * @method getOneParty
 * @static
 * @description this takes of GET one specific party
 * @constructor none
 * @param {object} req req object
 * @param {object} res res object
 * @returns {Object} status 404 party does not exist
 * @returns {Object} status 200 party details
 * @returns {Object} status 500 for server error
 */
  static async getOneParty(req, res) {
    try {
      const partyId = parseInt(req.params.id, 10);
      console.log('idparty', partyId);
      const getParty = await db.query(findPartyById(partyId));
      if (getParty.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'party does not exist',
        });
      }
      if (getParty.rowCount > 0) {
        return res.status(200).json({
          status: 200,
          data: { party: [getParty.rows[0]] },
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
 * @method editParty
 * @static
 * @description This returns updates party
 * @param {object} request request object
 * @param {object} response response object
 * @returns {Object} Object
*/
  static async editParty(req, res) {
    const userId = req.user.id;
    const partyId = req.params;
    const { partyName, hqAddress, logoUrl } = req.body;
    try {
      const checkQuestion = await db.query(findQuestion(partyId));
      if (checkQuestion.rowCount === 0) {
        return response.status(404).json({
          status: 'fail',
          message: 'question not found',
        });
      }
      const checkIfAnswerExists = await db.query(checkAnswerId(partyId, answerId));
      if (checkIfAnswerExists.rowCount === 0) {
        return response.status(404).json({
          status: 'fail',
          message: 'Answer does not exist for question',
        });
      }
      if (userId === checkQuestion.rows[0].user_id) {
        const preferredResult = await db.query(setPreferedAnswer(answerId));
        return response.status(200).json({
          status: 'success',
          message: 'Answer has been set to preferred successfully',
          answer: preferredResult.rows,
        });
      }
      if (userId === checkIfAnswerExists.rows[0].user_id) {
        const updateResult = await db.query(updateAnswer(answerBody, answerId, userId));
        if (updateResult.rowCount > 0) {
          return response.status(200).json({
            status: 'success',
            message: 'Answer has been updated successfully',
            answer: updateResult.rows,
          });
        }
      }
      return response.status(403).json({
        status: 'fail',
        message: 'you cannot perform this operation',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async deleteParty(req, res) {
    res.json({ error: 'logic to delete a party' });
  }
}

export default Parties;
