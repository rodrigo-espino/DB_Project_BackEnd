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

