BEGIN;

INSERT INTO categories (name, color) 
VALUES 
('Travel', '#989378'),
('Personal', '#9ff378'),
('Life', '#9f478'),
('Work', '#98ff378');

INSERT INTO tasks (title, description, status, due_date, category_id) 
VALUES 
('Sleep', 'sleep deeply', 'To Do', '2022-08-07', '1'),
('Eat', 'Eat deeply', 'In Progress','2022-08-07', '1'),
('Repeat', 'Repeat', 'Done','2022-09-07', '2'),
('sleep', 'sleep deeply', 'In Progress', '2022-08-07', '3');


COMMIT;