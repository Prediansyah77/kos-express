'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penghuni_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Penghunis', // Nama tabel target
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      bulan: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tahun: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tanggal_bayar: {
        type: Sequelize.DATE,
        allowNull: true
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      metode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pembayarans');
  }
};
