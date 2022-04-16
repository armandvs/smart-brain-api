BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('test', 'test@gmail.com', 5, '2018-01-01');
INSERT into login (hash, email) values ('$2a$10$6J0XHyXLz.iCBY2H6GlRleaAXBPyiQx8zLLqFT4JfBbDkEgfSD22m', 'test@gmail.com');

COMMIT;