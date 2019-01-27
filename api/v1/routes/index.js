import express from 'express';
import Party from '../controllers/partyController';
import Validator from '../middlewares/partyValidator';


const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to Politico API v1!'));
router.get('/parties', Party.getParties);
router.get('/parties/:id', Validator.validateId, Party.getOneParty);
router.post('/parties', Party.createParty);
router.put('/parties/:id', Validator.validateId, Party.editParty);
router.delete('/parties/:id', Validator.validateId, Party.deleteParty);

export default router;
