/** @function verifyAdmin
/* @param {object} req req object
/* @param {object} res res object
/* @param {object} next res object
/* @returns {Object} res status 404 if user could not be found
/* @returns {Object} status 401 if is a user
*/
const verifyAdmin = async (req, res, next) => {
  console.log('typeofIsAdmin_verify_admin', typeof (req.user.admin));
  try {
    if (req.user.isAdmin === false || req.user.isAdmin === 'undefined') {
      return res.status(403).json({ status: 403, error: 'Unauthorized, ACESSS DENIED' });
    }
    if (req.user.isAdmin === true) {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: 'Oops,...something went wrong on this admin route, try again!',
    });
  }
};

export default verifyAdmin;
