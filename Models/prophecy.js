const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Prophecy extends Model {}

Prophecy.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    prophecy_str: {
        type: DataTypes.STRING,
        validate: {
            len: [5]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }

}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'prophecy'
});

module.exports = Prophecy;