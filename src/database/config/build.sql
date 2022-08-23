BEGIN;

DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE tasks (
  id serial PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status VARCHAR(50) NOT NULL,
  start_date TIMESTAMP DEFAULT NOW(),
  due_date TIMESTAMP
);

CREATE TABLE categories (
  id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  task_id INTEGER REFERENCES tasks(id)
);


COMMIT;
