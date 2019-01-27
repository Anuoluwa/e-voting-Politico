import offices from '../models/offices';

class Offices {
  static async getOffices(req, res) {
    try {
      return await res.json(offices);
    } catch (err) {
      return res.status(404).json({ message: 'Parties not found!', err });
    }
  }

  static async getOneOffice(req, res) {
    const officeId = parseInt(req.params.id, 10);
    try {
      const officeItem = await offices.filter(office => office.officeId == officeId)[0];
      if (!officeItem) {
        return res.status(404).json({ message: 'Office does not exist!' });
      }
      return res.status(200).json(officeItem);
    } catch (err) {
      return res.status(500).json({ message: 'Sorry about that, not available', err });
    }
  }

  static createOffice(req, res) {
    const newOffice = {
      officeId: offices.length + 1,
      type: req.body.type,
      year: req.body.year,
      createdOn: req.body.createdOn,
    };
    offices.push(newOffice);
    res.status(201).json({ message: 'office was created successfully', data: offices });
  }
}

export default Offices;
