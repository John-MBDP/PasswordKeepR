/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get all organizations of single user in ascennding order by id
  router.get("/dashboards", (req, res) => {
    db.query(`SELECT * FROM organizations ORDER BY id ASC LIMIT 6;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get single organization by id
  router.get("/dashboard/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    return db
      .query(`SELECT * FROM organizations WHERE id = $1`, [id])
      .then((data) => {
        const users = data.rows[0];
        res.render("editOrganization", { users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // updated data in an existing organization
  router.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, domain, username, site_password, category } = req.body;
    db.query(
      `UPDATE organizations SET name = $1, domain = $2, username = $3, site_password = $4, category = $5 WHERE id = $6 RETURNING *`,
      [name, domain, username, site_password, category, id]
    )
      .then((data) => {
        const users = data.rows[0];
        res.redirect("/dashboard");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add organization and insert data into organization and credential table
  router.post("/dashboard", (req, res) => {
    const { name, domain } = req.body;
    const { username, site_password, category } = req.body;
    return db
      .query(
        `INSERT INTO organizations (name, domain, username, site_password, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, domain, username, site_password, category]
      )
      .then((data) => {
        const users = data.rows[0];
        res.json(users);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Filter organizations according categories
  router.get("/dashboard/:category", (req, res) => {
    const category = req.params.category;
    console.log("my cat:", category);

    return db
      .query(`SELECT * FROM organizations WHERE category = $1`, [category])
      .then((data) => {
        const users = data.rows;
        console.log(users);
        res.render("dashboard", { users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/dashboard/json/:category", (req, res) => {
    const category = req.params.category;

    return db
      .query(`SELECT * FROM organizations WHERE category = $1`, [category])
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Delete a organization
  router.post("/dashboard/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`DELETE FROM organizations WHERE id = $1`, [id])
      .then((data) => {
        const users = data.rows[0];
        res.redirect("/dashboard");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
