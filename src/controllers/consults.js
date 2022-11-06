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
      "SELECT * FROM CLASSES WHERE id NOT IN (SELECT class_id FROM ATTENDS WHERE memb_id = ?)",[
        req.params.id
      ])
    res.json(row);
    }
    catch(e){
      res.json(e);
    }
  }

export const class_room = async (req, res) => {
  const con = await connect();
  try{
    const [row] = await con.query(
      "SELECT * FROM ASSIGNED A JOIN CLASSES C ON A.class_id = C.id JOIN ROOMS R ON R.id = A.room_id WHERE C.id = ?" ,[
        req.params.id
      ]
    )
    res.json(row);
  }
  catch(e){
    res.json(e);
  }
}

export const class_notInRoom = async (req, res) => {
  const con = await connect();
  try{
    const [row] = await con.query(
      "SELECT * FROM ROOMS WHERE id NOT IN (SELECT room_id FROM ASSIGNED WHERE class_id = ?)",[
        req.params.id
      ]
      )
      res.json(row);
  }
  catch(e){
    res.json(e);
  }

}