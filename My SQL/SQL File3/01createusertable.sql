create database if not exists startersql ;
use startersql;
create table users (
id int auto_increment primary key ,
name varchar(100) unique not null,
email varchar(100) unique not null,
gender enum('Male' , 'Female', 'Others'),
date_of_birth date,
salary decimal (10,2),
created_at timestamp default current_timestamp);

