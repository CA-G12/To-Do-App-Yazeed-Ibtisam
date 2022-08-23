BEGIN;

INSERT INTO tasks (title, description, status) 
VALUES 
('Sleep', 'sleep deeply', 'To Do'),
('Eat', 'Eat deeply', 'In Progress'),
('Repeat', 'Repeat', 'Done'),
('sleep', 'sleep deeply', 'In Progress');

INSERT INTO categories (name) 
VALUES 
('Travel'),
('Personal'),
('Life'),
('Work');

COMMIT;