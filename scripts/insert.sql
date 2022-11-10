-- INSTRUCTORS
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Anthony Scott", "618-278-3456", "3 years", "Basic")
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Charles Oliver", "618-689-4321", "1 year", "Superior");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Laura Brown", "618-965-0956", "2 years", "Middle");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Thomas Burton", "618-456-2342", "5 years", "Superior");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Ashley Padilla", "618-967-7683", "3 years", "Middle");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Robert Jones", "618-573-7593", "8 years", "Superior");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Jesse Fox", "618-243-5543", "10 years", "Superior");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Kevin Robinson", "618-124-1189", "5 years", "Middle");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Alyssa Donovan", "618-453-2298", "7 years", "Basic");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Michael Myers", "618-567-3433", "2 years", "Middle");
INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES("Bradley Lee", "618-847-2904", "4 years", "Superior");



-- MEMBERS
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Jeniffer Shelton", "8759 George Drive Burlington, MA 01803", "618-968-4455", "Student", "Bank of America");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Jason Cruz", "1 Bridge Lane Holbrook, NY 11741", "618-758-3444", "Doctor", "Ally Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Michael Luna", "9848 Wall Drive Midland, MI 48640", "618-707-6476", "Police", "Alliant Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Elizabeth Waller", "777 San Pablo Ave. Dedham, MA 02026", "618-455-9009", "Receptionist", "East Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Denise Moore", "7600 Meadow Street Forest Hills, NY 11375", "618-808-5643", "Lawyer", "Turist Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Teresa Phillips", "8136 E. Addison Lane Griffin, GA 30223", "618-606-4322", "Writer", "Discover Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Keith Moon", "527 Clark St. Greenwood, SC 29646", "618-649-0980", "Nurse", "Ally Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("William Hernandez", "9392C Beach St. Ithaca, NY 14850", "618-665-2214", "Architect", "East Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Edgar Walker", "9645 Woodside Drive Norwalk, CT 06851", "618-474-2907", "Doctor", "East Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Mathew Burke", "27 W. William St. Fairport, NY 14450", "618-675-2342", "Teacher", "Discover Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Alecia Annabel", "662 Van Dyke Dr. Dundalk, MD 21222", "618-390-4382", "Lawyer", "East Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Alethea Gwyneth", "9810 Court St. Mcdonough, GA 30252", "618-394-0984", "Student", "Discover Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Dixie Elton", "312 Shore Drive Bayside, NY 11361", "618-849-2832", "Engineer", "Turist Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Richmal Caryl", "8890 Sussex Rd. Clemmons, NC 27012", "618-102-6734", "Developer", "Ally Bank");
INSERT INTO MEMBERS (name, address, phone, profession, bank_det) VALUES ("Hedley Lynsey", "8332 Glendale Drive Euless, TX 76039", "618-329-4721", "Chef", "Discover Bank");


-- ROOMS
INSERT INTO ROOMS (meters, location, typeofR) VALUES (5.55, "Third-Floor R3", "Cardio");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (7.75, "First-Floor R1", "Free Weights");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (7.75, "Second-Floor R2", "Low Impact");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (3.6, "Second-Floor R3", "Functional");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (2.5, "Third-Floor R1", "Relaxing");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (5.75, "First-Floor R2", "Resistance");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (4.75, "Second-Floor R1", "Boxing");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (5.6, "Third-Floor R2", "Cardio Machines");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (2.5, "First-Floor R3", "Pool");
INSERT INTO ROOMS (meters, location, typeofR) VALUES (2.5, "First-Floor R4", "Low Impact");


-- SQUASH COURT
INSERT INTO SQUASH_COURT (location, cond)  VALUES ("First-Floor R5", "Excelent");
INSERT INTO SQUASH_COURT (location, cond)  VALUES ("Second-Floor R4", "Bad");
INSERT INTO SQUASH_COURT (location, cond)  VALUES ("Third-Floor R4", "Regular");
INSERT INTO SQUASH_COURT (location, cond)  VALUES ("Second-Floor R5", "Good");
INSERT INTO SQUASH_COURT (location, cond)  VALUES ("Third-Floor R5", "Good");

-- DEVICES
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Squat Rack","New",2);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Barbell set","New",2);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Adjustable Bench","Old",2);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Stairway","New",8);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Balance Ball","Recent",3);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("TRX Equipment","Old",4);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Set of Mats","New",5);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Dumbbell set","Old",6);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Boxing Bag","Recent",7);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Punch Shield","New",7);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Multifunctional Machine","Old",2);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Elliptical Cycle","Recent",8);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Hack Machine","New",2);
INSERT INTO DEVICES (descr, st, room_id) VALUES ("Set of Mats","New",3);


-- CLASSES
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mond-Wedn-Frid at 7:00pm","HIIT",1);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 5:00pm","Pilates",3);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 6:00pm","Zumba",5);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 4:00pm","Zumba Kids",10);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 8:00pm","PowerLifting",7);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Tues-Thurs at 5:00pm","TRX",9);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mond-Wedn-Frid at 9:00pm","Yoga",2);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mond-Wedn-Frid at 9:00pm","Yoga Kids",3);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 8:00pm","Kick Boxing Beginners",4);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 9:00pm","Kick Boxing Advanced",6);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Tues-Thurs at 7:00pm","Indoor Cycling",6);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Tues-Thurs at 6:00pm","Swimming Kids",8);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Tues-Thurs at 6:00pm","Swimming",9);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 7:00pm","Callisthenics Beginners",1);
INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES ("Mon-Frid at 8:00pm","Callisthenics Advanced",10);



-- ASSIGNED
INSERT INTO ASSIGNED VALUES(1,6);
INSERT INTO ASSIGNED VALUES(2,3);
INSERT INTO ASSIGNED VALUES(3,1);
INSERT INTO ASSIGNED VALUES(5,2);
INSERT INTO ASSIGNED VALUES(6,4);
INSERT INTO ASSIGNED VALUES(7,5);
INSERT INTO ASSIGNED VALUES(10,7);
INSERT INTO ASSIGNED VALUES(11,8);
INSERT INTO ASSIGNED VALUES(13,9);
INSERT INTO ASSIGNED VALUES(15,10);

-- ATTENDS
INSERT INTO ATTENDS VALUES(1, 4);
INSERT INTO ATTENDS VALUES(2, 9);
INSERT INTO ATTENDS VALUES(3, 5);
INSERT INTO ATTENDS VALUES(3, 1);
INSERT INTO ATTENDS VALUES(5, 3);
INSERT INTO ATTENDS VALUES(6, 8);
INSERT INTO ATTENDS VALUES(7, 2);
INSERT INTO ATTENDS VALUES(7, 7);
INSERT INTO ATTENDS VALUES(10, 10);
INSERT INTO ATTENDS VALUES(11, 6);
INSERT INTO ATTENDS VALUES(5, 11);
INSERT INTO ATTENDS VALUES(13, 12);
INSERT INTO ATTENDS VALUES(6, 13);
INSERT INTO ATTENDS VALUES(5, 14);
INSERT INTO ATTENDS VALUES(15, 15);


-- RESERVATION
INSERT INTO RESERVATION (member_id, squash_court, Rdate, Rtime) VALUES(1, 5, '2022-10-30', '06:30:00');
INSERT INTO RESERVATION (member_id, squash_court, Rdate, Rtime) VALUES(3, 2, '2022-11-01', '04:00:00');
INSERT INTO RESERVATION (member_id, squash_court, Rdate, Rtime) VALUES(5, 1, '2022-10-28', '08:45:00');
INSERT INTO RESERVATION (member_id, squash_court, Rdate, Rtime) VALUES(7, 3, '2022-10-31', '05:30:00');
INSERT INTO RESERVATION (member_id, squash_court, Rdate, Rtime) VALUES(10, 4, '2022-12-10', '06:00:00');


-- Queries

-- List of classes by instructor
SELECT * FROM classes c INNER JOIN instructors i ON i.sno = c.inst_id GROUP BY i.sno

-- List of members by class
SELECT * FROM members m JOIN attends a ON m.id = a.memb_id JOIN classes c ON c.id = a.class_id GROUP BY m.id

-- List of members by instructor
SELECT * FROM members m JOIN attends a ON a.memb_id = m.id JOIN classes c ON a.class_id = c.id JOIN instructors i ON i.sno = c.inst_id GROUP BY i.sno 

-- List of all the equipment
SELECT * FROM devices

-- List of the equipment of a given room or court
SELECT * FROM devices d INNER JOIN rooms r ON d.room_id = r.id WHERE r.id = ?
