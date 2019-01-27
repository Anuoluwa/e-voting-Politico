import parties from '../models/parties';

class Parties {
  static async getParties(req, res) {
    try {
      return await res.json(parties);
    } catch (err) {
      return res.status(404).json({ message: 'Parties not found!', err });
    }
  }

  static async getOneParty(req, res) {
    const partyId = parseInt(req.params.id, 10);
    try {
      const partyItem = await parties.filter(party => party.partyId == partyId)[0];
      if (!partyItem) {
        return res.status(404).json({ message: 'Order does not exist!' });
      }
      return res.status(200).json(partyItem);
    } catch (err) {
      return res.status(500).json({ message: 'Sorry about that, not available', err });
    }
  }
}

export default Parties;
