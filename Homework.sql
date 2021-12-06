CREATE TABLE streets(
id serial primary key,
name character varying(30)
);


CREATE TABLE persons(
id serial primary key,
first_name character varying(30),
last_name character varying(30),
age INTEGER not null,
street_id INTEGER,
foreign key (street_id) references streets(id)
);


insert into streets ("name") values ('Trinity'), ('Paragon'), ('Pembrock'), ('Milsom'), ('Kings');


insert into persons ("first_name", "last_name", "age", "street_id") values 
('Fry', 'Ginsi', 27 , 1),
('John', 'Ginsi', 26 , 1),
('Adda', 'Ginsi', 40 , 2),
('Bill', 'Ginsi', 52 , 2),
('Ben', 'Dilinger', 12 , 3),
('Marry', 'Dilinger', 73 , 3),
('Kati', 'Booshe', 15 , 4),
('Liza', 'Booshe', 35 , 4),
('Tommy', 'Joel', 27 , 5),
('Bob', 'Joel', 27 , 5),
('Alex', 'Owner', 27 , null),
('Ginna', 'Owner', 27 , null);

/*DROP TABLE persons;*/

/*3. Display total number*/
select count(*) from persons


/*4. Display the average age of residents*/
select AVG(age) from persons;


/*5. Display a sorted list of surnames without repetitions*/
select distinct last_name from persons order by last_name


/*6. Display a list of surnames, indicating the number of repetitions of these surnames in the general list*/
select last_name, count(*) from persons group by last_name


/*7. Display last names that contain the letter "b" in the middle*/
 select last_name 
 from persons 
 where last_name like '_%b%_'

 
/*8. Display homeless people*/
select * from persons where street_id is null


/*9. Display a list of minors living along Pembrock*/
select * from persons
join streets on persons.street_id = streets.id
where streets.name like '%Pembrock%' and persons.age < 18;


/*10. Display all streets in alphabetical order, showing how many residents live on the street*/
SELECT streets.id, streets.name, COUNT(persons.id) FROM streets JOIN persons ON streets.id = persons.street_id 
GROUP BY streets.id, streets.name;


/*11. Display a list of streets, the name of which consists of 6 letters*/
select * from streets where length(name) = 6


/*12. List streets with less than 3 residents.*/
SELECT name FROM streets WHERE id NOT IN (
SELECT street_id FROM persons GROUP BY street_id HAVING COUNT(*) >= 3 );
 

/*13. Update all users who have the letter "B" in their name, so that they would lose their street*/
update persons
set street_id = null
where first_name like '%B%'
 

/*14. Remove residents who have no streets*/
delete from persons
where street_id is null








