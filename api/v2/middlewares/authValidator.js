/**
 * A class to represent validation conditions.
 * @class authValidator
 *
 * @constructor none
 * @static
 * @method gives validation condition to input to auth/signin controller
 * @method gives validation condition to input to auth/login controller
 */

export default class authValidator {
  /**
      * Middleware for validation for all users input to question controller .
      * @param {req} str - The req is the receiver of inputs from client.
      * @param {res} str - The res is the carries response to user end from server.
      * @return {res.status()} A response object and emit appropriate errors.
      */

  static signup(req, res, next) {
    const {
      firstname, lastname, othername, address, phoneNumber, passportUrl, email, password,
    } = req.body;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const validPassword = /^[a-zA-Z0-9.\-$@*!]{6,12}$/g.test(password);
    if (req.body === '') {
      return res.status(400)
        .json({ error: 'The request body should not be empty!' });
    }
    if (!firstname) {
      return res.status(400).json({ error: 'firstname should not contain special characters, numbers and whitespace' });
    }
    if (typeof firstname === 'undefined') {
      return res.status(400)
        .json({ error: 'firstname field must not be undefined' });
    }
    if (typeof firstname !== 'string') {
      return res.status(400)
        .json({ error: 'firstname input should be a string' });
    }
    if (firstname.length === '') {
      return res.status(400)
        .json({ error: 'firstname must not be empty' });
    }
    if (!(/^[a-zA-Z-]+$/.test(firstname))) {
      return res.status(400)
        .json({ error: 'firstname input should be a string without number or special characters' });
    }
    if (firstname.length > 50) {
      return res.status(400)
        .json({ error: 'firstname must be a string with maximum length of 50' });
    }
    if (firstname.length < 2) {
      return res.status(400)
        .json({ error: 'firstname must be a string with with minimum length of 6' });
    }
    if (!lastname) {
      return res.status(400).json({ error: 'firstname should not contain special characters, numbers and whitespace' });
    }
    if (typeof lastname === 'undefined') {
      return res.status(400)
        .json({ error: 'lastname field must not be undefined' });
    }
    if (typeof lastname !== 'string') {
      return res.status(400)
        .json({ error: 'lastname input should be a string' });
    }
    if (lastname.length === '') {
      return res.status(400)
        .json({ error: 'lastname must not be empty' });
    }
    if (!(/^[a-zA-Z-]+$/.test(lastname))) {
      return res.status(400)
        .json({ error: 'firstname input should be a string without number or special characters' });
    }
    if (lastname.length > 50) {
      return res.status(400)
        .json({ error: 'lastname must be a string with maximum length of 50' });
    }
    if (lastname.length < 2) {
      return res.status(400)
        .json({ error: 'lastname must be a string with with minimum length of 6' });
    }

    if (!othername) {
      return res.status(400).json({ error: 'firstname should not contain special characters, numbers and whitespace' });
    }
    if (typeof othername === 'undefined') {
      return res.status(400)
        .json({ error: 'othername field must not be undefined' });
    }
    if (typeof othername !== 'string') {
      return res.status(400)
        .json({ error: 'othername input should be a string' });
    }
    if (othername.length === '') {
      return res.status(400)
        .json({ error: 'othername must not be empty' });
    }
    if (!(/^[a-zA-Z-]+$/.test(othername))) {
      return res.status(400)
        .json({ error: 'firstname input should be a string without number or special characters' });
    }
    if (othername.length > 50) {
      return res.status(400)
        .json({ error: 'othername must be a string with maximum length of 50' });
    }
    if (othername.length < 2) {
      return res.status(400)
        .json({ error: 'othername must be a string with with minimum length of 6' });
    }

    if (typeof address === 'undefined') {
      return res.status(400)
        .json({ error: 'address must not be undefined' });
    }
    if (address.length === '') {
      return res.status(400)
        .json({ error: 'address field must not be empty' });
    }
    if (address.length < 10) {
      return res.status(400)
        .json({ error: 'address must be minimum length of 10' });
    }
    if (address.length > 50) {
      return res.status(400)
        .json({ error: 'address must be must be maximum length of 50' });
    }
    if (!(/^[#.0-9a-zA-Z\s,-]+$/.test(address))) {
      return res.status(400)
        .json({ error: 'address must be have a valid characters' });
    }

    if (typeof phoneNumber === 'undefined') {
      return res.status(400)
        .json({ error: '"phoneNumber" field must not be empty' });
    }
    if (phoneNumber.length === '') {
      return res.status(400)
        .json({ error: '"phoneNumber" field must not be empty' });
    }
    if (phoneNumber.length !== 11) {
      return res.status(400)
        .json(
          { error: '"phoneNumber" must be digits of 11 numbers' },
        );
    }
    if (!(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(phoneNumber))) {
      return res.status(400)
        .json({ error: '"phoneNumber" must be in the right format' });
    }


    if (!passportUrl) {
      return res.status(400).json({ error: 'firstname should not contain special characters, numbers and whitespace' });
    }
    if (typeof passportUrl === 'undefined') {
      return res.status(400)
        .json({ error: 'passportUrl field must not be undefined' });
    }
    if (typeof passportUrl !== 'string') {
      return res.status(400)
        .json({ error: 'passportUrl input should be a string' });
    }
    if (passportUrl.length === '') {
      return res.status(400)
        .json({ error: 'passportUrl must not be empty' });
    }
    if (typeof email === 'undefined') {
      return res.status(400)
        .json({ error: '"email" field must not be undefined' });
    }
    if (email.length === '') {
      return res.status(400)
        .json({ error: '"email" must be not empty' });
    }
    if (!validEmail) {
      return res.status(400).json({ error: '"email" should be in the proper format' });
    }
    if (typeof password === 'undefined' || typeof validPassword === 'undefined') {
      return res.status(400)
        .json({ error: '"password" field must not be undefined' });
    }
    if (password.length === '') {
      return res.status(400)
        .json({ error: '"password" must be not empty' });
    }
    if (password.length < 6) {
      return res.status(400)
        .json({ error: '"password" must be with minimum length of 6' });
    }
    if (password.length > 13) {
      return res.status(400)
        .json(
          { error: '"password" must be a string with maximum length of 12' },
        );
    }
    if (!validPassword) {
      return res.status(400).json('"password" must be a string of numbers');
    }
    next();
  }

  /**
       * Middleware for validation for all users input.
       * @param {req} str - The req is the receiver of inputs from client.
       * @param {res} str - The res is the carries response to user end from server.
       * @return {res.status()} A response object and emit appropriate errors.
       */
  static login(req, res, next) {
    const { email, password } = req.body;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const validPassword = /^[a-zA-Z0-9.\-$@*!]{6,12}$/g.test(password);
    if (typeof email === 'undefined') {
      return res.status(400)
        .json({ error: '"email" field must not be undefined' });
    }
    if (email.length === '') {
      return res.status(400)
        .json({ error: '"email" must be not empty' });
    }
    if (!validEmail) {
      return res.status(400).json({ error: '"email" should be in the proper format' });
    }
    if (typeof password === 'undefined' || typeof validPassword === 'undefined') {
      return res.status(400)
        .json({ error: '"password" field must not be undefined' });
    }
    if (password.length === '') {
      return res.status(400)
        .json({ error: '"password" must be not empty' });
    }
    if (password.length < 6) {
      return res.status(400)
        .json({ error: '"password" must be with minimum length of 6' });
    }
    if (password.length > 13) {
      return res.status(400)
        .json({ error: '"password" must be a string with maximum length of 12' });
    }
    if (!validPassword) {
      return res.status(400).json({ error: '"password" must be a string of numbers' });
    }
    next();
  }
}
