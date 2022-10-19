import {connect} from '../database';

export const getDevices = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM DEVICES');
    res.json(rows);
}

export const getDevice = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM DEVICES WHERE ID = ?', [req.params.id]);
    res.json(rows);
}

export const createDevice = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('INSERT INTO DEVICES (descr, st, room_id) VALUES (?, ?, ?)', [
    req.body.descr,
    req.body.st,
    req.body.room_id
]);
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const updateDevice = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('UPDATE DEVICES SET ? WHERE ID = ?', [
        req.body, req.params.id]);
    console.log("Rs")    
    console.log(results);
    res.sendStatus(204)
}

export const deleteDevice = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('DELETE FROM DEVICES WHERE ID = ?', [req.params.id]);
    res.sendStatus(204)
    
}