class ValidateInput {
  static partyInput(req, res, next) {
    const {
      name,
      hqAddress,
      logoUrl,
    } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" must be a string!' })
        .end();
    }
    if (name.length < 8) {
      return res.status(400).json(
        { message: '"name" must be a string with minimum 20 characters' },
      )
        .end();
    }
    if (name.length > 100) {
      return res.status(400).json({ message: '"name" must be a string with maximum 200 characters' })
        .end();
    }
    if (!hqAddress) {
      return res.status(400).json('"hqAddress" must be a string')
        .end();
    }
    if (hqAddress.length < 7) {
      return res.status(400).json({ messge: '"hqAddress" must be a string with minimum 20 characters' })
        .end();
    }
    if (hqAddress.length > 50) {
      return res.status(400).json({ message: '"hqAddress" must be a string with maximum 20 character ' })
        .end();
    }
    if (!logoUrl) {
      return res.status(400).json({ message: '"logoUrl" must be a string' })
        .end();
    }
    if (logoUrl.length < 8) {
      return res.status(400).json({ message: '"logoUrl" must be a string with minimum 20 characters' })
        .end();
    }
    if (logoUrl.length > 70) {
      return res.status(400).json({ message: '"logoUrl" must be a string with maximum 20 character ' })
        .end();
    }
    next();
  }

  static officeInput(req, res, next) {
    const {
      type,
      name,
    } = req.body;

    if (!type) {
      return res.status(400).json('"type" must be a string')
        .end();
    }
    if (type.length < 7) {
      return res.status(400).json({ messge: '"type" must be a string with minimum 7 characters' })
        .end();
    }
    if (type.length > 50) {
      return res.status(400).json({ message: '"type" must be a string with maximum 50 character ' })
        .end();
    }
    if (!name) {
      return res.status(400).json({ message: '"name" must be a string!' })
        .end();
    }
    if (name.length < 8) {
      return res.status(400).json(
        { message: '"name" must be a string with minimum 8 characters' },
      )
        .end();
    }
    if (name.length > 100) {
      return res.status(400).json({ message: '"name" must be a string with maximum 100 characters' })
        .end();
    }
    next();
  }

  static validateId(req, res, next) {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    if (id.length === '') {
      return res.status(400).json({ message: '"ID" should not be empty!' })
        .end();
    }
    if (Number.isNaN(parsedId) === true) {
      return res.status(400).json({
        message: 'PartyId must be a number',
      });
    }
    next();
  }
}
export default ValidateInput;
