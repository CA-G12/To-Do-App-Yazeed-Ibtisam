BEGIN;

DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  color VARCHAR(10) NOT NULL
);

CREATE TABLE tasks (
  id serial PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status VARCHAR(50) NOT NULL,
  start_date DATE DEFAULT NOW(),
  due_date DATE,
  category_id INTEGER REFERENCES categories(id)
);

COMMIT;