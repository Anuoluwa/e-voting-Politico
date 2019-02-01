import express from 'express';
import Office from '../controllers/officeController';
import Party from '../controllers/partyController';
import Validator from '../middlewares/inputValidator';


const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to Politico API v1!'));
router.get('/parties', Party.getParties);
router.get('/parties/:id', Validator.validateId, Party.getOneParty);
router.post('/parties', Validator.partyInput, Party.createParty);
router.patch('/parties/:id', Validator.validateId, Validator.partyInput, Party.editParty);
router.delete('/parties/:id', Validator.validateId, Party.deleteParty);
router.get('/offices', Office.getOffices);
router.get('/offices/:id', Validator.validateId, Office.getOneOffice);
router.post('/offices', Validator.officeInput, Office.createOffice);
router.use('*', (req, res) => res.json('Route does not exist'));


export default router;
