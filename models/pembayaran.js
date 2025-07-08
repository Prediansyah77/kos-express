'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    static associate(models) {
      // Pembayaran milik satu penghuni
      Pembayaran.belongsTo(models.Penghuni, {
        foreignKey: 'penghuni_id',
        as: 'penghuni'
      });
    }
  }

  Pembayaran.init({
    penghuni_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bulan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggal_bayar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    metode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pembayaran',
    tableName: 'Pembayarans'
  });

  return Pembayaran;
};
