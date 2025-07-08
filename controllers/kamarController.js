const db = require('../models');
const Kamar = db.Kamar;

module.exports = {
    async getAll(req, res) {
        try {
            const data = await Kamar.findAll({ include: ['penghunis'] });
            res.json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const kamar = await Kamar.findByPk(req.params.id, { include: ['penghunis'] });
            if (!kamar) return res.status(404).json({ message: 'Kamar tidak ditemukan' });
            res.json(kamar);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const kamar = await Kamar.create(req.body);
            res.status(201).json(kamar);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async update(req, res) {
        try {
            const kamar = await Kamar.findByPk(req.params.id);
            if (!kamar) return res.status(404).json({ message: 'Kamar tidak ditemukan' });
            await kamar.update(req.body);
            res.json(kamar);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async delete(req, res) {
        try {
            const kamar = await Kamar.findByPk(req.params.id);
            if (!kamar) return res.status(404).json({ message: 'Kamar tidak ditemukan' });
            await kamar.destroy();
            res.json({ message: 'Kamar dihapus' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
