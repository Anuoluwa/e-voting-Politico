class Parties {
  static async getParties(req, res) {
    res.json({ message: 'logic to get all the parties' });
  }

  static async getOneParty(req, res) {
    res.json({ message: 'logic to get all the one party' });
  }

  static createParty(req, res) {
    res.json({ message: 'logic to create party goes here' });
  }


  static async editParty(req, res) {
    res.json({ message: 'logic to update a party' });
  }

  static async deleteParty(req, res) {
    res.json({ message: 'logic to delete a party' });
  }
}

export default Parties;
