import offices from '../models/offices';

class Offices {
  static async getOffices(req, res) {
    try {
      return await res.json(offices);
    } catch (err) {
      return res.status(404).json({ message: 'Parties not found!', err });
    }
  }
}

export default Offices;
