const User = require("../models/User");
module.exports = { 

  async store(req, res) {
    const { name:name, email:email, password:password } = req.body;
    const user = await User.create({ name:name, email:email, password:password });
    //return res.json(user);
    return res.json(name)
  },
};
