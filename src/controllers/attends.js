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
        const [results] =  await connection.query('INSERT INTO ATTENDS (class_id, memb_id) VALUES (?, ?)', [
            req.body.class_id,
            req.body.memb_id
        ]);
            res.json({
                id: results.insertId,
                ...req.body
            })
    }
    catch(e){
        res.json(e)
    }
}

export const updateAttend = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('UPDATE ATTENDS SET ? WHERE ID = ?', [
        req.body, req.params.id]);
        console.log("Rs")    
        console.log(results);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
}

export const deleteAttend = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('DELETE FROM ATTENDS WHERE ID = ?', [req.params.id]);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
    
}