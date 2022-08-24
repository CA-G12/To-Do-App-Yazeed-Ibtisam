BEGIN;

INSERT INTO categories (name, color) VALUES 
('Travel', '#989378'),
('Personal', '#9ff378'),
('Life', '#9f478'),
('Work', '#98ff378');

INSERT INTO tasks (title, description, status, due_date, category_id) 
VALUES 
('Code and dig in', 'This task is rarely happening in developers lives, Having irregular sleeping patterns is very common in the Software Industry.', 'Done', '2022-08-07', '3'),
('Sleep Well!', 'This task is rarely happening in developers lives, Having irregular sleeping patterns is very common in the Software Industry.', 'To Do', '2022-08-07', '1'),
('Eat', 'This task is rarely happening in developers lives, Having irregular sleeping patterns is very common in the Software Industry.', 'In Progress','2022-08-07', '1'),
('Repeat It!', 'This task is rarely happening in developers lives, Having irregular sleeping patterns is very common in the Software Industry.', 'In Progress','2022-09-07', '2'),
('Sleep Well!', 'This task is rarely happening in developers lives, Having irregular sleeping patterns is very common in the Software Industry.', 'To Do', '2022-08-07', '1'),
('Eat', 'This task is rarely happening in developers lives, Having irregular sleeping patterns is very common in the Software Industry.', 'Done','2022-08-07', '1');


COMMIT;