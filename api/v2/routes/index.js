
import express from 'express';
import Auth from '../controllers/authController';
import Office from '../controllers/officeController';
import Party from '../controllers/partyController';
import vote from '../controllers/voteController';
import authValidation from '../middlewares/authValidator';
import verifyToken from '../middlewares/verifyToken';
import verifyAdmin from '../middlewares/verifyAdmin';
import Validator from '../middlewares/inputValidators';

const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to Politico API v1!'));

router.post('/auth/signup', authValidation.signup, Auth.signUp);
router.post('/auth/login', authValidation.login, Auth.login);
router.post('/parties', verifyToken, verifyAdmin, Validator.partyInput, Party.createParty);
router.get('/parties', verifyToken, Party.getAllParties);
router.get('/parties/:id', verifyToken, Validator.validateId, Party.getOneParty);
router.get('/offices', verifyToken, Office.getOffices);
router.get('/offices/:id', verifyToken, Validator.validateId, Office.getOneOffice);
router.post('/offices', verifyToken, verifyAdmin, Validator.officeInput, Office.createOffice);
router.patch('/parties/:id/name', verifyToken, verifyAdmin, Validator.validateId, Validator.officeInput, Party.editParty);
router.delete('/parties/:id', verifyToken, verifyAdmin, Validator.validateId, Party.deleteParty);
router.post('/offices/:id/register', verifyToken, verifyAdmin, Validator.validateId, Validator.registerCandidateValidator, Office.registerCandidate);
router.post('/votes', verifyToken, Validator.officeCandidateValidator, vote.voteCandidate);
router.post('/offices/:id/result', verifyToken, Validator.validateId, Office.collateResults);
router.use('*', (req, res) => res.json({ status: 404, error: 'Route does not exist' }));


export default router;
