create table universities (
 id serial primary key,
 name varchar,
);

create table person (
 id serial primary key,
 role varchar,
 name varchar,
 university_id integer,
 foreign key (university_id) references universities(id)
);

create table courses (
 id serial primary key,
 name varchar,
 university_id integer,
 teachers_id integer,
 foreign key (university_id) references universities(id),
 foreign key (teachers_id) references users(id)
);

create table students_courses (
 students_id int,
 courses_id int,
 foreign key (students_id) references users(id),
 foreign key (courses_id) references courses(id)
);

create table marks (
 id serial primary key,
 mark integer,
 student_id int,
 course_id int,
 university_id int,
 foreign key (university_id) references universities(id),
    foreign key (student_id) references users(id),
    foreign key (course_id) references courses(id)
);

insert into universities (country, city, name, accreditation)
values('DDTU'),
('DNU');

insert into users (role, name, age, university_id)
values('teacher', 'Anna', 1),
('teacher', 'Timur', 2),
('student', 'Misha', 1),
('student', 'Roman', 2);

insert into courses (name, university_id, teachers_id)
values('React', 1, 1),
('Node', 2, 2);

insert into students_courses (students_id, courses_id)
values(1, 1),
(2, 2);

insert into marks (mark, student_id, course_id, university_id)
values(12, 1, 1, 1),
(7, 1, 2, 1),
(8, 2, 1, 2),
(5, 2, 2, 2);