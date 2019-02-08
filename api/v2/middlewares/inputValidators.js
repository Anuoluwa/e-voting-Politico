class ValidateInput {
  static partyInput(req, res, next) {
    const {
      partyName,
      hqAddress,
      logoUrl,
    } = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400)
        .json({ error: 'The request body should not be empty!' });
    }
    if (typeof partyName !== 'string') {
      return res.status(400)
        .json({ error: 'partyName input should be a string' });
    }
    if (!partyName) {
      return res.status(400)
        .json({ error: 'partyName must be a string!' });
    }
    if (partyName.length === '') {
      return res.status(400)
        .json({ error: 'partyName must not be empty' });
    }
    if (partyName.length < 7) {
      return res.status(400).json(
        { error: 'partyName must be a string with minimum 8 characters' },
      );
    }
    if (partyName.length > 100) {
      return res.status(400).json({ error: 'partyName must be a string with maximum 100 characters' });
    }
    if (!(/^[A-Za-z ]+$/.test(partyName))) {
      return res.status(400)
        .json({ error: 'partyName input should be a string without number or special characters' });
    }
    if (!hqAddress) {
      return res.status(400).json('hqAddress must be a string');
    }

    if (typeof hqAddress !== 'string') {
      return res.status(400)
        .json({ error: 'hqAddress input should be a string' });
    }
    if (hqAddress.length === '') {
      return res.status(400)
        .json({ error: 'hqAddress must not be empty' });
    }
    if (hqAddress.length < 7) {
      return res.status(400).json({ error: 'hqAddress must be a string with minimum 7 characters' });
    }
    if (hqAddress.length > 50) {
      return res.status(400).json({ error: 'hqAddress must be a string with maximum 50 character ' });
    }
    if (typeof logoUrl !== 'string') {
      return res.status(400)
        .json({ error: 'logoUrl input should be a string' });
    }
    if (logoUrl.length === '') {
      return res.status(400)
        .json({ error: 'logoUrl must not be empty' });
    }
    if (!logoUrl) {
      return res.status(400).json({ error: 'logUrl must be a string' });
    }
    if (logoUrl.length < 8) {
      return res.status(400).json({ error: 'logUrl must be a string with minimum 8 characters' });
    }
    if (logoUrl.length > 300) {
      return res.status(400).json({ error: 'logUrl must be a string with maximum 70 character ' });
    }
    next();
  }

  static officeInput(req, res, next) {
    const {
      type,
      officeName,
    } = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400)
        .json({ error: 'The request body should not be empty!' });
    }
    if (typeof type !== 'string') {
      return res.status(400)
        .json({ error: 'type input should be a string' });
    }
    if (type.length === '') {
      return res.status(400)
        .json({ error: 'type must not be empty' });
    }
    if (!type) {
      return res.status(400)
        .json('type must be a string should not empty');
    }
    if (type.length < 4) {
      return res.status(400)
        .json({ error: 'type must be a string with minimum 4 characters' });
    }
    if (type.length > 50) {
      return res.status(400)
        .json({ error: 'type must be a string with maximum 50 character ' });
    }
    if (!(/^[A-Za-z ]+$/.test(type))) {
      return res.status(400)
        .json({ error: 'type input should be a string without number or special characters' });
    }
    if (typeof officeName !== 'string') {
      return res.status(400)
        .json({ error: 'officeName input should be a string' });
    }
    if (officeName.length === '') {
      return res.status(400)
        .json({ error: 'officeName must not be empty' });
    }
    if (!officeName) {
      return res.status(400)
        .json({ error: 'officeName must be a string and should not be empty!' });
    }
    if (officeName.length < 4) {
      return res.status(400)
        .json(
          { error: 'officeName must be a string with minimum 4 characters' },
        );
    }
    if (officeName.length > 100) {
      return res.status(400)
        .json({ error: 'officeName must be a string with maximum 100 characters' });
    }
    if (!(/^[A-Za-z ]+$/.test(officeName))) {
      return res.status(400)
        .json({ error: 'officeName input should be a string without number or special characters' });
    }
    next();
  }

  static officeCandidateValidator(req, res, next) {
    const {
      office,
      candidate,
    } = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400)
        .json({ error: 'The request body should not be empty!' });
    }
    if (typeof office !== 'string') {
      return res.status(400)
        .json({ error: 'office input should be a string' });
    }
    if (office.length === '') {
      return res.status(400)
        .json({ error: 'office must not be empty' });
    }
    if (!office) {
      return res.status(400)
        .json('office must be a string should not empty');
    }
    if (typeof candidate !== 'string') {
      return res.status(400)
        .json({ error: 'candidate input should be a string' });
    }
    if (candidate.length === '') {
      return res.status(400)
        .json({ error: 'candidate must not be empty' });
    }
    if (!candidate) {
      return res.status(400)
        .json('candidate must be a string should not be empty');
    }
    if (!(/^\d*[1-9]\d*$/.test(office))) {
      return res.status(400)
        .json({ error: 'office input should be positive numbers only' });
    }
    if (!(/^\d*[1-9]\d*$/.test(candidate))) {
      return res.status(400)
        .json({ error: 'candidate input should be positive numbers only' });
    }
    next();
  }

  static registerCandidateValidator(req, res, next) {
    const {
      office,
      party,
    } = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400)
        .json({ error: 'The request body should not be empty!' });
    }
    if (typeof office !== 'string') {
      return res.status(400)
        .json({ error: 'office input should be a string' });
    }
    if (office.length === '') {
      return res.status(400)
        .json({ error: 'office must not be empty' });
    }
    if (!office) {
      return res.status(400)
        .json('office must be a string should not empty');
    }
    if (typeof party !== 'string') {
      return res.status(400)
        .json({ error: 'party input should be a string' });
    }
    if (party.length === '') {
      return res.status(400)
        .json({ error: 'party must not be empty' });
    }
    if (!party) {
      return res.status(400)
        .json('party must be a string should not empty');
    }
    if (!(/^\d*[1-9]\d*$/.test(office))) {
      return res.status(400)
        .json({ error: 'office input should be a positive numbers only' });
    }
    if (!(/^\d*[1-9]\d*$/.test(party))) {
      return res.status(400)
        .json({ error: 'party input should be a positive numbers only' });
    }
    next();
  }

  static partyInputEdit(req, res, next) {
    const {
      partyName,
    } = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400)
        .json({ error: 'The request body should not be empty!' });
    }
    if (typeof partyName !== 'string') {
      return res.status(400)
        .json({ error: 'partyName input should be a string' });
    }
    if (!partyName) {
      return res.status(400)
        .json({ error: 'partyName must be a string!' });
    }
    if (partyName.length === '') {
      return res.status(400)
        .json({ error: 'partyName must not be empty' });
    }
    if (partyName.length < 7) {
      return res.status(400).json(
        { error: 'partyName must be a string with minimum 8 characters' },
      );
    }
    if (partyName.length > 100) {
      return res.status(400).json({ error: 'partyName must be a string with maximum 100 characters' });
    }
    if (!(/^[A-Za-z ]+$/.test(partyName))) {
      return res.status(400)
        .json({ error: 'partyName input should be a string without number or special characters' });
    }
    next();
  }

  static validateId(req, res, next) {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    if (id.length === '') {
      return res.status(400).json({ error: '"ID" should not be empty!' });
    }
    if (Number.isNaN(parsedId) === true) {
      return res.status(400).json({
        status: 409,
        error: 'Id must be a number',
      });
    }
    next();
  }
}
export default ValidateInput;
