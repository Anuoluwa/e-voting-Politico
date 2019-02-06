import db from '../config/connection';
import {
  createOffice, findOffice, getAllOffice, findOfficeById, createCandidate,
  checkOffice, checkParty, checkCandidate, collateResult,
} from '../models/queries';
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
          status: 201,
          office: [addOffice.rows],
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
    try {
      const getOneOffice = await db.query(getAllOffice());
      if (getOneOffice.rowCount === 0) {
        return res.status(200).json({
          status: 200,
          error: 'Sorry no office at the moment',
        });
      }
      return res.status(200).json({
        status: 200,
        data: [{ offices: getOneOffice.rows }],
      });
    } catch (error) {
      console.log({ message: `${error}` });
      return res.status(500).json({
        status: 500,
        error: 'Sorry, something went wrong in getting all office!',
      });
    }
  }

  /**
 * @method getOneOffice
 * @static
 * @description this takes of GET one specific office
 * @constructor none
 * @param {object} req req object
 * @param {object} res res object
 * @returns {Object} status 404 office does not exist
 * @returns {Object} status 200 office details
 * @returns {Object} status 500 for server error
 */
  static async getOneOffice(req, res) {
    try {
      const officeId = Number(req.params.id, 10);
      const getOffice = await db.query(findOfficeById(officeId));
      if (getOffice.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'office does not exist',
        });
      }
      if (getOffice.rowCount > 0) {
        return res.status(200).json({
          status: 200,
          data: { office: [getOffice.rows[0]] },
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

  static async registerCandidate(req, res) {
    try {
      const candidate = Number(req.params.id, 10);
      const office = Number(req.body.office, 10);
      const party = Number(req.body.party, 10);
      const getOffice = await db.query(checkOffice(office));
      if (getOffice.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'office does not exist',
        });
      }

      const partyExists = await db.query(checkParty(party));
      if (partyExists.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'party does not exist',
        });
      }

      const candidateExists = await db.query(checkCandidate(candidate));
      if (candidateExists.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'candidate does not exist',
        });
      }
      const newcandidate = {
        office, party, candidate,
      };
      if (getOffice.rowCount > 0 && partyExists.rowCount > 0 && candidateExists.rowCount > 0) {
        const addCandidate = await db.query(createCandidate(newcandidate));
        if (addCandidate.rowCount > 0) {
          return res.status(201).json({
            status: 201,
            office: [addCandidate.rows],
          });
        }
      }
    } catch (error) {
      console.log({ message: `${error}` });
      if (error.constraint.includes('candidates_pkey')) {
        return res.status(409).json({
          status: 409,
          error: 'Candidate cannot be registered twice',
        });
      }
      return res.status(500).json({
        status: 500,
        error: 'Sorry, something went wrong, try again!',
      });
    }
  }

  static async collateResults(req, res) {
    try {
      const office = Number(req.params.id, 10);
      const getOffice = await db.query(checkOffice(office));
      if (getOffice.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'office does not exist',
        });
      }
      if (getOffice.rowCount > 0) {
        const fetchResult = await db.query(collateResult(office));
        return res.status(200).json({
          status: 200,
          data: { results: [fetchResult.rows] },
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
}

export default Offices;
