/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get all users in ascennding order by id
  router.get("/users", (req, res) => {
    db.query(`SELECT * FROM users ORDER BY id ASC;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get single user by id
  router.get("/users/:id", (req, res) => {
    const id = parseInt(request.params.id);
    db.query(`SELECT * FROM users WHERE id = $1`, [id])
      .then((data) => {
        const users = data.rows[0];
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Create new user
  router.get("/users", (req, res) => {
    const { name, email, password } = request.body;
    db.query(
      `INSERT INTO users (name, email) VALUES ($1, $2, $3) RETURNING *`,
      [name, email, password]
    )
      .then((data) => {
        const users = data.rows[0];
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // updated data in an existing user
  router.get("/users/:id", (req, res) => {
    const id = parseInt(request.params.id);
    const { name, email, password } = request.body;
    db.query(
      `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4`,
      [name, email, password, id]
    )
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Delete a user
  router.get("/users/:id", (req, res) => {
    const id = parseInt(request.params.id);
    db.query(`DELETE FROM users WHERE id = $1`, [id])
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};

//Generate password for a user
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log("Lower:", getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log("Upper:", getRandomUpper());

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log("Number:", getRandomNumber());

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log("Symbol:", getRandomSymbol());
