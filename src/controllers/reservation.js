import {connect} from '../database';

export const getReservations = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM RESERVATION');
    res.json(rows);
}

export const getReservation = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM RESERVATION WHERE ID = ?', [req.params.id]);
    res.json(rows);
}

export const createReservation = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('INSERT INTO RESERVATION (member_id, squash_court, Rdate, Rtime) VALUES (?, ?, ?, ?, ?)', [
    req.body.member_id,
    req.body.squash_court,
    req.body.Rdate,
    req.body.Rtime
]);
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const updateReservation = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('UPDATE RESERVATION SET ? WHERE ID = ?', [
        req.body, req.params.id]);
    console.log("Rs")    
    console.log(results);
    res.sendStatus(204)
}

export const deleteReservation = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('DELETE FROM RESERVATION WHERE ID = ?', [req.params.id]);
    res.sendStatus(204)
    
}