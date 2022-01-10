-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS organizations CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS credentials CASCADE;
DROP TABLE IF EXISTS organization_categories  CASCADE;
DROP TABLE IF EXISTS organization_credentials CASCADE;



-- users table
CREATE TABLE users (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
);

-- organizations table
CREATE TABLE organizations (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
photo_url VARCHAR(255) NOT NULL,
domain VARCHAR(255) NOT NULL
);

-- categories table
CREATE TABLE categories (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL
);

-- credentials table
CREATE TABLE credentials (
id SERIAL PRIMARY KEY NOT NULL,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
url VARCHAR(255) NOT NULL,
username VARCHAR(255) NOT NULL,
site_password VARCHAR(255) NOT NULL,
generated_password VARCHAR(255) NOT NULL
);

-- organization-categories table
CREATE TABLE organization_categories (
id SERIAL PRIMARY KEY NOT NULL,
organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

-- organization-credentials table
CREATE TABLE organization_credentials (
id SERIAL PRIMARY KEY NOT NULL,
credential_id INTEGER REFERENCES credentials(id) ON DELETE CASCADE,
organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);
