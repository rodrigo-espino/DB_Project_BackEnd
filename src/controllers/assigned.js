import {connect} from '../database';

export const getAssigneds = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM ASSIGNED');
    res.json(rows);
}

export const getAssigned = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM ASSIGNED WHERE ID = ?', [req.params.id]);
    res.json(rows);
}

export const createAssigned = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('INSERT INTO ASSIGNED (class_id, room_id) VALUES (?, ?)', [
    req.body.class_id,
    req.body.room_id
]);
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const updateAssigned = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('UPDATE ASSIGNED SET ? WHERE ID = ?', [
        req.body, req.params.id]);
    console.log("Rs")    
    console.log(results);
    res.sendStatus(204)
}

export const deleteAssigned = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('DELETE FROM ASSIGNED WHERE ID = ?', [req.params.id]);
    res.sendStatus(204)
    
}