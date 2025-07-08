const db = require('../models');
const User = db.User;

module.exports = {
    async getAll(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async update(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
            await user.update(req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async delete(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
            await user.destroy();
            res.json({ message: 'User dihapus' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
