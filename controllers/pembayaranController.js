const db = require('../models');
const Pembayaran = db.Pembayaran;

module.exports = {
    async getAll(req, res) {
        try {
            const data = await Pembayaran.findAll({ include: ['penghuni'] });
            res.json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const pembayaran = await Pembayaran.findByPk(req.params.id, { include: ['penghuni'] });
            if (!pembayaran) return res.status(404).json({ message: 'Data tidak ditemukan' });
            res.json(pembayaran);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const pembayaran = await Pembayaran.create(req.body);
            res.status(201).json(pembayaran);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async update(req, res) {
        try {
            const pembayaran = await Pembayaran.findByPk(req.params.id);
            if (!pembayaran) return res.status(404).json({ message: 'Data tidak ditemukan' });
            await pembayaran.update(req.body);
            res.json(pembayaran);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async delete(req, res) {
        try {
            const pembayaran = await Pembayaran.findByPk(req.params.id);
            if (!pembayaran) return res.status(404).json({ message: 'Data tidak ditemukan' });
            await pembayaran.destroy();
            res.json({ message: 'Data dihapus' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
