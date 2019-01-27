import express from 'express';
import Party from '../controllers/partyController';
import Validator from '../middlewares/partyValidator';


const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to Politico API v1!'));
router.get('/parties', Party.getParties);
router.get('/parties/:id', Validator.validateId, Party.getOneParty);

export default router;
