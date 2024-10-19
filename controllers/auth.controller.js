const { models } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await models.User.create({ username, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send({ error: 'Failed to register user' });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await models.User.findOne({ where: { username } });
    if (!user) return res.status(404).send({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
};

module.exports = { register, login };
