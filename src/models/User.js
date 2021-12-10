const { Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Datatypes.STRING,
        email: Datatypes.STRING,
        password: Datatypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
