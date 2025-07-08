const db = require('../models');
const Penghuni = db.Penghuni;

module.exports = {
    async getAll(req, res) {
        try {
            const data = await Penghuni.findAll({ include: ['kamar', 'pembayarans'] });
            res.json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const penghuni = await Penghuni.findByPk(req.params.id, { include: ['kamar', 'pembayarans'] });
            if (!penghuni) return res.status(404).json({ message: 'Penghuni tidak ditemukan' });
            res.json(penghuni);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const penghuni = await Penghuni.create(req.body);
            res.status(201).json(penghuni);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async update(req, res) {
        try {
            const penghuni = await Penghuni.findByPk(req.params.id);
            if (!penghuni) return res.status(404).json({ message: 'Penghuni tidak ditemukan' });
            await penghuni.update(req.body);
            res.json(penghuni);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async delete(req, res) {
        try {
            const penghuni = await Penghuni.findByPk(req.params.id);
            if (!penghuni) return res.status(404).json({ message: 'Penghuni tidak ditemukan' });
            await penghuni.destroy();
            res.json({ message: 'Penghuni dihapus' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
