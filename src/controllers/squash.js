import {connect} from '../database';

export const getSquashes = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM SQUASH_COURT');
    res.json(rows);
}

export const getSquash = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM SQUASH_COURT WHERE ID = ?', [req.params.id]);
    res.json(rows);
}

export const createSquash = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('INSERT INTO SQUASH_COURT (location, cond) VALUES (?, ?)', [
    req.body.location,
    req.body.cond
]);
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const updateSquash = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('UPDATE SQUASH_COURT SET ? WHERE ID = ?', [
        req.body, req.params.id]);
    res.sendStatus(204)
}

export const deleteSquash = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('DELETE FROM SQUASH_COURT WHERE ID = ?', [req.params.id]);
    res.sendStatus(204)
    
}