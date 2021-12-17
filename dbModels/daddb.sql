CREATE TABLE auth ( auth_id SERIAL PRIMARY KEY, hash STRING, dad_id INTEGER FOREIGN KEY, email VARCHAR(200));
CREATE TABLE dad ( person_id SERIAL PRIMARY KEY, firstName VARCHAR(200), lastName VARCHAR(200), email VARCHAR(200), username VARCHAR(200));
CREATE TABLE post ( person_id SERIAL PRIMARY KEY, name VARCHAR(200), age INTEGER, height INTEGER, city VARCHAR(200), favorite_color VARCHAR(200));

INSERT INTO auth ( hash, dad_id, email) VALUES ({hash}, {dad_id}, {email});


CREATE TABLE dad (
    dad_id SERIAL PRIMARY KEY,
    title VARCHAR(50)
);

CREATE TABLE auth (
    auth_id SERIAL PRIMARY KEY,
    dad_id INTEGER NOT NULL REFERENCES dad(dad_id),
    hash 
    email VARCHAR(50)
);

CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    postcontent TEXT,
    username INTEGER NOT NULL REFERENCES users(user_id),
    body TEXT
);


module.exports = auth;