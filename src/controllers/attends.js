import {connect} from '../database';

export const getAttendes = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM ATTENDS');
        res.json(rows);
    }
    catch(e){
        res.json(e)
    }
}

export const getAttend = async(req, res) => {
    const connection = await connect();
   try{
    const [rows] =  await connection.query('SELECT * FROM ATTENDS WHERE ID = ?', [req.params.id]);
    res.json(rows);
   }
   catch(e){
        res.json(e)
   }
}

export const createAttend = async(req, res) => {
    const connection = await connect();
    try{
        await connection.query('INSERT INTO ATTENDS (class_id, memb_id) VALUES (?, ?)', [
            req.body.class_id,
            req.body.memb_id
        ]);
            res.json({
                ...req.body
            })
    }
    catch(e){
        res.json(e)
    }
}
export const deleteAttend = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('DELETE FROM ATTENDS WHERE memb_id = ? and class_id = ?', [
            req.params.id,
            req.params.idc]);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
    
}