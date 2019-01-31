import offices from '../models/offices';

class Offices {
  static async getOffices(req, res) {
    try {
      return await res.json({ status: 200, offices });
    } catch (err) {
      return res.status(404).json({ status: 404, error: 'Offices not found!' });
    }
  }

  static async getOneOffice(req, res) {
    const officeId = parseInt(req.params.id, 10);
    try {
      const officeItem = await offices.filter(office => office.officeId == officeId)[0];
      if (!officeItem) {
        return res.status(404).json({ status: 404, error: 'Office does not exist!' });
      }
      return res.status(200).json({ status: 200, data: [officeItem] });
    } catch (err) {
      return res.status(404).json({ status: 500, error: 'Sorry about that, not available' });
    }
  }

  static createOffice(req, res) {
    const newOffice = {
      officeId: offices.length + 1,
      type: req.body.type,
      name: req.body.name,
    };
    offices.push(newOffice);
    res.status(201).json({ status: 201, data: [offices[offices.length - 1]] });
  }
}

export default Offices;
