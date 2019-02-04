
class Offices {
  static async getOffices(req, res) {
    res.json({ message: 'logic to get all the offices goes here' });
  }

  static async getOneOffice(req, res) {
    res.json({ message: 'logic to get an offices goes here' });
  }

  static createOffice(req, res) {
    res.json({ message: 'logic to create  offices goes here' });
  }
}

export default Offices;
