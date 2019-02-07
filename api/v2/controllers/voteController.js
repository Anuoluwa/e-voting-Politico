import db from '../config/connection';
import { createVote, checkOffice, checkContestant } from '../models/queries';
/**
 * Creates a new VoteController.
 * @class
 * @classdesc VoteController has static methods.
 */
class Votes {
  static async voteCandidate(req, res) {
    try {
      const createdBy = req.user.id;
      const { office, candidate } = req.body;
      const getOffice = await db.query(checkOffice(office));
      if (getOffice.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'office does not exist',
        });
      }
      const contestantExists = await db.query(checkContestant(candidate));
      if (contestantExists.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'candidate does not exist',
        });
      }
      const newVote = {
        createdBy, office, candidate,
      };
      const vote = await db.query(createVote(newVote));
      if (vote.rowCount > 0) {
        return res.status(201).json({
          status: 201,
          data: { results: [vote.rows] },
        });
      }
    } catch (error) {
      console.log({ message: `${error}` });
      if (error.constraint.includes('votes_pkey')) {
        return res.status(409).json({
          status: 409,
          error: 'Sorry, you cannot vote for the same candidate twice',
        });
      }
      return res.status(500).json({
        status: 500,
        error: 'Sorry, something went wrong, try again!',
      });
    }
  }
}

export default Votes;
