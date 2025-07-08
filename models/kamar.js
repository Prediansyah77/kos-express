'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Kamar extends Model {
    static associate(models) {
      // 1 kamar memiliki banyak penghuni
      Kamar.hasMany(models.Penghuni, {
        foreignKey: 'kamar_id',
        as: 'penghunis'
      });
    }
  }

  Kamar.init({
    nama_kamar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'kosong'
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Kamar',
    tableName: 'Kamars', // pastikan ini sesuai dengan nama di migration
  });

  return Kamar;
};
