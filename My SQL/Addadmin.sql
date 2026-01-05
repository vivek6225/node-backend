CREATE TABLE Admin_users(
id  INT PRIMARY KEY,
name VARCHAR(50),
email  VARCHAR(50),
gender ENUM('Male', 'Female'),
date_of_birth DATE,
salary int
);
insert into admin.users(id, name, email, gende, Date_of_birth, slary) VALUES
(101, 'Anil Kumar', 'anil@example.com' , Male, 1985-04-12, 60000 ),
(101, 'pooja Sharma', 'pooja@example.com' , Female, 1995-04-12, 70000 ),
(101, 'Ankit Kumar', 'ankit@example.com' , Female, 2004-04-12, 80000 ),
(101, 'vivek Kumar Kumar', 'vivek@example.com' , Female, 2002-04-12, 90000 );
