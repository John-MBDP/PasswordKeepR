-- Users table seeds here (Example)
INSERT INTO users (
    name, email, password)
    VALUES (
    'Devin Sanders', 'tristanjacobs@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Iva Harrison', 'allisonjackson@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Lloyd Jefferson', 'asherpoole@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Dale Coleman', 'michaelgray@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Alejandro Osborne', 'ariaatkinson@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Nell Medina', 'juliansantos@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Estelle Walsh', 'elistanton@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Herbert Graves', 'emilyowen@live.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'John Stevens', 'charliebattle@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
    INSERT INTO users (
    name, email, password)
    VALUES (
    'Isabelle Robbins', 'miasutton@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

-- INSERT INTO ORGANIZATIONS
INSERT INTO organizations (
    name, photo_url, domain)
    VALUES (
    'linkedin', 'img', 'https://www.linkedin.com');
    INSERT INTO organizations (
    name, photo_url, domain)
    VALUES (
    'instagram', 'img', 'https://www.instagram.com');
    INSERT INTO organizations (
    name, photo_url, domain)
    VALUES (
    'twitter', 'img', 'https://twitter.com');
    INSERT INTO organizations (
    name, photo_url, domain)
    VALUES (
    'bamboo', 'img', 'https://www.bamboo.com');
    INSERT INTO organizations (
    name, photo_url, domain)
    VALUES (
    'LHL', 'img', 'https://www.lighthouselabs.ca');
    INSERT INTO organizations (
    name, photo_url, domain)
    VALUES (
    'snapchat', 'img', 'https://www.snapchat.com');
    INSERT INTO organizations (
    name, photo_url, domain)
    VALUES (
    'reddit', 'img', 'https://www.reddit.com');

-- INSERT INTO CATEGORIES TABLE
INSERT INTO categories (name)
    VALUES ('social');
    INSERT INTO categories (name)
    VALUES ('entertainment');
    INSERT INTO categories (name)
    VALUES ('work related');

-- INSERT INTO CREDENTIALS TABLE
INSERT INTO credentials (
  user_id, url, username, site_password, generated_password)
  VALUES (1, 'https://example.com', 'username', 'password', 'genratedpsw');
  INSERT INTO credentials (
  user_id, url, username, site_password, generated_password)
  VALUES (2, 'https://example.com', 'username', 'password', 'genratedpsw');
  INSERT INTO credentials (
  user_id, url, username, site_password, generated_password)
  VALUES (3, 'https://example.com', 'username', 'password', 'genratedpsw');
  INSERT INTO credentials (
  user_id, url, username, site_password, generated_password)
  VALUES (4, 'https://example.com', 'username', 'password', 'genratedpsw');
  INSERT INTO credentials (
  user_id, url, username, site_password, generated_password)
  VALUES (5, 'https://example.com', 'username', 'password', 'genratedpsw');

  -- INSERT DATA INTO ORGANIZATION_CATEGORIES TABLE
INSERT INTO organization_categories (
  organization_id, category_id)
  VALUES (1,1);
  INSERT INTO organization_categories (
  organization_id, category_id)
  VALUES (1,2);
  INSERT INTO organization_categories (
  organization_id, category_id)
  VALUES (2,1);
  INSERT INTO organization_categories (
  organization_id, category_id)
  VALUES (3,3);
  INSERT INTO organization_categories (
  organization_id, category_id)
  VALUES (4,1);
  INSERT INTO organization_categories (
  organization_id, category_id)
  VALUES (5,2);

-- INSERT DATA INTO ORGANIZATION_CREDENTIALS TABLE
INSERT INTO organization_credentials (
  organization_id, credential_id)
  VALUES (1,2);
  INSERT INTO organization_credentials (
  organization_id, credential_id)
  VALUES (2,3);
  INSERT INTO organization_credentials (
  organization_id, credential_id)
  VALUES (3,1);
  INSERT INTO organization_credentials (
  organization_id, credential_id)
  VALUES (4,2);
  INSERT INTO organization_credentials (
  organization_id, credential_id)
  VALUES (1,4);
