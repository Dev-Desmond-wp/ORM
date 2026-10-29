const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('Relationship', 'root', 'root1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;