'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penghuni extends Model {
    static associate(models) {
      // Penghuni milik satu kamar
      Penghuni.belongsTo(models.Kamar, {
        foreignKey: 'kamar_id',
        as: 'kamar'
      });

      // Penghuni punya banyak pembayaran
      Penghuni.hasMany(models.Pembayaran, {
        foreignKey: 'penghuni_id',
        as: 'pembayarans'
      });
    }
  }

  Penghuni.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_hp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kamar_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tanggal_masuk: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tanggal_keluar: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Penghuni',
    tableName: 'Penghunis'
  });

  return Penghuni;
};
