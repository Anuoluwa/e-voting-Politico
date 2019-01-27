import express from 'express';
import Party from '../controllers/partyController';

const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to Politico API v1!'));
router.get('/parties', Party.getParties);


export default router;
