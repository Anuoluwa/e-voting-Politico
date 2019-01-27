class ValidateInput {
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
