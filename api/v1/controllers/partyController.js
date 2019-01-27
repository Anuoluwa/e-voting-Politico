import parties from '../models/parties';

class Parties {
  static async getParties(req, res) {
    try {
      return await res.json(parties);
    } catch (err) {
      return res.status(404).json({ message: 'Parties not found!', err });
    }
  }
}

export default Parties;
