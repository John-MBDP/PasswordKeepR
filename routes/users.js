/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // get all users in ascennding order by id
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users ORDER BY id ASC;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
        console.log(users);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // get single user by id
  router.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`SELECT * FROM users WHERE id = $1`, [id])
      .then(data => {
        console.log(data.rows[0]);
        const users = data.rows[0];
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Create new user
  router.get("/users", (req, res) => {
    const { name, email, password } = req.body;
    db.query(`INSERT INTO users (name, email) VALUES ($1, $2, $3) RETURNING *`, [name, email, password])
      .then(data => {
        const users = data.rows[0];
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

// add organization and insert data into organization and credential table
  router.post("/dashboard", (req, res) => {
    const { name, domain } = req.body;
    const {username, site_password } = req.body;
    // console.log(name,domain,username,site_password)
    let users = {};
    db.query(`INSERT INTO organizations (name, domain ,photo_url) VALUES ($1, $2, $3) RETURNING *`, [name,domain, "pic"])

    .then(data => {
      users = data.rows[0];
       return db.query(`INSERT INTO credentials (username, site_password, url, generated_password, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [username,site_password, "url","psw",1])

      })
      .then(data => {
        console.log(data.rows[0]);
        res.json({users});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      })
  });


  // updated data in an existing user
  router.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, password } = req.body;
    db.query(`UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4`,
    [name, email, password, id])
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Delete a user
  router.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`DELETE FROM users WHERE id = $1`, [id])
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
