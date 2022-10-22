import {connect} from '../database';

export const getClasses = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM CLASSES');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const getClass = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM CLASSES WHERE ID = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

export const createClass = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('INSERT INTO CLASSES (scheduleC, description, inst_id) VALUES (?, ?, ?)', [
        req.body.sche,
        req.body.dec,
        req.body.inst
        ]);
        res.json({
            id: results.insertId,
            ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
    
}

export const updateClass = async(req, res) => {
    const connection = await connect();
    try{
            await connection.query('UPDATE CLASSES SET ? WHERE ID = ?', [
            req.body, req.params.id]);
            res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
    
}

export const deleteClass = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('DELETE FROM CLASSES WHERE ID = ?', [req.params.id]);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e);
    }
}
