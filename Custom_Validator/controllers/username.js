const {body, validationResult} = require('express-validator');
const Username = require('../models/username');
function getUsername(req, res) {
  Username.find((err, usernames_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(usernames_list);
    }
  });
}

const createUsername = [
  body('username').custom((value) => {
    if (value.includes('&') || value.includes('*')) {
      throw new Error('Username should not contain &,*');
    }
    if (value.length < 5 || value.length > 15) {
      throw new Error('Username length is 5-15');
    }
    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({status: 0, debug_data: errors});
    } else {
      console.log(req.body);
      let {username} = req.body;
      let usernameObject = new Username({username});
      usernameObject.save((error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({status: 'Adding Username Successfully'});
        }
      });
    }
  },
];

function deleteUsername(req, res) {
  Username.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(error);
    } else {
      res.json(`Username with _id as ${req.params._id} is removed`);
    }
  });
}

module.exports = {getUsername, createUsername, deleteUsername};
