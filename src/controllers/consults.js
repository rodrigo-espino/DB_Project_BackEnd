import { connect } from "../database";

export const membClass = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM ATTENDS A JOIN MEMBERS M ON A.memb_id = M.id  JOIN CLASSES C  ON c.id = A.class_id where M.id = ?",
      [req.params.id]
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

export const memNotSelectedClasses = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM CLASSES WHERE id NOT IN (SELECT class_id FROM ATTENDS WHERE memb_id = ?)",
      [req.params.id]
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

export const class_room = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM ASSIGNED A JOIN CLASSES C ON A.class_id = C.id JOIN ROOMS R ON R.id = A.room_id WHERE C.id = ?",
      [req.params.id]
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

export const class_notInRoom = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM ROOMS WHERE id NOT IN (SELECT room_id FROM ASSIGNED WHERE class_id = ?)",
      [req.params.id]
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

//Show all classes with their respective instructor
export const classbyinst = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM CLASSES c JOIN INSTRUCTORS i ON c.inst_id = i.sno"
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

// Show all the members who are attending a particular class
export const MembnClass = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM members m JOIN attends a ON m.id = a.memb_id JOIN classes c ON c.id = a.class_id GROUP BY m.id"
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

// Show all the members and their Instructors
export const MembyInst = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM members m JOIN attends a ON a.memb_id = m.id JOIN classes c ON a.class_id = c.id JOIN instructors i ON i.sno = c.inst_id"
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

//Show all the devices registered
export const Devices = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM devices"
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};

// Show all the devices in a particular room
export const DevicesbyRoom = async (req, res) => {
  const con = await connect();
  try {
    const [row] = await con.query(
      "SELECT * FROM DEVICES d INNER JOIN ROOMS r ON d.room_id = r.id"
    );
    res.json(row);
  } catch (e) {
    res.json(e);
  }
};
