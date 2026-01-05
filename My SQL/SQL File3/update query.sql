use startersql;
-- delete from users where id=15;
  -- select * from users;
 --  select count(*) from users;
--  select count(*) from users where gender='female' ;
-- select min(salary) as min_salary, max(salary) as max_salary from users;
-- select sum(salary) as total from users; 
-- select avg(salary) as avg_salary from users;
-- select gender ,avg(salary) as avg_salary from users group by gender;
-- select id, gender,name,length(name) as name_len from users;
-- select id,gender,lower(name) as lower,concat(lower(name), "5678") as username,length(name) as name_len from users;
select salary ,
round(salary) as rounded,
floor(salary) as floored,
ceil(salary) as ceiled
from users;