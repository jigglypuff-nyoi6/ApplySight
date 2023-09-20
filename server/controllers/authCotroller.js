const express = require('express');

export const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    if (existingUser.rowCount > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [
      email,
      hashedPassword,
    ]);
    res.status(201).json({ message: 'User registered successfully' });

    // next??
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    //  TODO: Implement JWT or session-based authentication to keep the user logged in
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
