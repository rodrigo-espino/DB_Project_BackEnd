CREATE TABLE IF EXISTS DB_PROJECT
USE DB_PROJECT

CREATE TABLE ROOMS (
id int primary key auto_increment, 
meters double, 
location varchar(50),
typeofR varchar(50)
)

CREATE TABLE DEVICES(
id int primary key auto_increment,
descr varchar(50),
st varchar(50),
room_id int 
)

CREATE TABLE INSTRUCTORS(
SNO int primary key auto_increment,
name varchar(50),
phone varchar(50),
experience varchar(50),
degree varchar(50)
)

CREATE TABLE MEMBERS(
id int primary key auto_increment, 
name varchar(50),
address varchar(50),
phone varchar(50),
profession varchar(50), 
bank_det varchar(50)
)

CREATE TABLE RESERVATION (
id int primary key auto_increment, 
member_id int,
squash_court int, 
Rdate date,
Rtime time 
)

CREATE TABLE SQUASH_COURT(
id int primary key auto_increment,
location varchar(50),
cond varchar(50)
)

CREATE TABLE ATTENDS (
class_id int,
memb_id int
)

CREATE TABLE CLASSES(
id int primary key auto_increment,
scheduleC date,
description varchar(50),
inst_id int
)


CREATE TABLE ASSIGNED(
class_id int,
room_id int
)

CREATE TABLE USERS(
id int primary key auto_increment,
name varchar(50),
user varchar(50),
pass varchar(50)
)

ALTER TABLE ASSIGNED ADD FOREIGN KEY (class_id ) REFERENCES CLASSES (id) ON DELETE CASCADE
ALTER TABLE ASSIGNED ADD FOREIGN KEY (room_id ) REFERENCES ROOMS (id) ON DELETE CASCADE

ALTER TABLE CLASSES ADD FOREIGN KEY (inst_id) REFERENCES INSTRUCTORS (SNO) ON DELETE CASCADE

ALTER TABLE ATTENDS ADD FOREIGN KEY (class_id) REFERENCES CLASSES (id) ON DELETE CASCADE
ALTER TABLE ATTENDS ADD FOREIGN KEY (memb_id) REFERENCES MEMBERS (id) ON DELETE CASCADE

ALTER TABLE DEVICES ADD FOREIGN KEY (room_id) REFERENCES ROOMS (id) ON DELETE CASCADE

ALTER TABLE RESERVATION ADD FOREIGN KEY (member_id) REFERENCES MEMBERS (id) ON DELETE CASCADE
ALTER TABLE RESERVATION ADD FOREIGN KEY (squash_court) REFERENCES SQUASH_COURT (id) ON DELETE CASCADE

