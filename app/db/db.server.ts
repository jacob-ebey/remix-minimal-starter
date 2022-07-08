import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:');

const User = sequelize.define('User', {
  email: DataTypes.STRING,
});

const LoginMethod = sequelize.define('LoginMethod', {
  type: DataTypes.ENUM('password', '3rdparty'),
  hashedPassword: DataTypes.STRING,
});

User.hasMany(LoginMethod);
LoginMethod.belongsTo(User);
