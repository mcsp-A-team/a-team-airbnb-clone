const express = require("express");
const path = require('path')
const cors = require("cors");
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const { DATABASE_URL, NODE_ENV, PORT } = process.env;
const pool = new Pool({
  connectionString: DATABASE_URL,
  ...(NODE_ENV === "production" ? { ssl: { rejectUnauthorized: false } } : {}),
});

const app = express();
app.use(express.static(path.join(__dirname, "build")));

//Connected Database
pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("PostgresSQL Connected");
  }
});
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));


// GET HOMES
app.get("/homes", (req, res) => {
  pool.query("SELECT * FROM homes").then((result) => {
    res.send(result.rows);
  });
});
// GET homes by ID
app.get("/homes/:id", (req, res, next) => {
  const id = req.params.id;
  pool
    .query("SELECT * FROM homes WHERE id = $1", [id])
    .then((data) => {
      const home = data.rows;
      if ([0]) {
        res.send(home);
      }
    })
    .catch(next);
});
// GET HOMES by Country
app.get("/homes/country/:country", (req, res, next) => {
  const country = req.params.country;
  pool
    .query("SELECT * FROM homes WHERE country = $1", [country])
    .then((data) => {
      const home = data.rows;
      if ([0]) {
        res.send(home);
      }
    })
    .catch(next);
});

// GET HOMES by Property Type
app.get("/homes/type/:prop_type", (req, res, next) => {
  const prop_type = req.params.prop_type;
  pool
    .query("SELECT * FROM homes WHERE prop_type = $1", [prop_type])
    .then((data) => {
      const home = data.rows;
      if ([0]) {
        res.send(home);
      }
    })
    .catch(next);
});

// DELETE HOME
app.delete("/homes/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM homes WHERE id = $1", [id]);
  res.sendStatus(200);
});
// PATCH HOME
app.patch("/homes/:id", async (req, res) => {
  const { id } = req.params;
  const {
    zipcode,
    city,
    streetname,
    streetaddress,
    country,
    state,
    home_type,
    prop_type,
    latitude,
    longitude,
  } = req.body;
  const result = await pool
    .query(
      `
        UPDATE homes
        SET zipcode = COALESCE($1, zipcode),
        city = COALESCE($2, city),
        streetname = COALESCE($3, streetname),
        streetaddress = COALESCE($4, streetaddress),
        country = COALESCE($5, country),
        state = COALESCE($6, state),
        home_type = COALESCE($7, home_type),
        prop_type = COALESCE($8, prop_type),
        latitude = COALESCE($9, latitude),
        longitude = COALESCE($10, longitude),
        WHERE id = $11
        RETURNING *;
        `,
      [
        zipcode,
        city,
        streetname,
        streetaddress,
        country,
        state,
        home_type,
        prop_type,
        latitude,
        longitude,
        id,
      ]
    )
    .then((data) => {
      res.send(data.rows[0]);
    });
});
// POST HOME
app.post("/homes/", (req, res) => {
  const {
    zipcode,
    city,
    streetname,
    streetaddress,
    country,
    state,
    home_type,
    prop_type,
    latitude,
    longitude,
  } = req.body;
  pool
    .query(
      `
      INSERT INTO homes
      (
        zipcode,
        city,
        streetname,
        streetaddress,
        country,
        state,
        home_type,
        prop_type,
        latitude,
        longitude
        )
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
        `,
      [
        zipcode,
        city,
        streetname,
        streetaddress,
        country,
        state,
        home_type,
        prop_type,
        latitude,
        longitude,
      ]
    )
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});