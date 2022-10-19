import {connect} from '../database';

export const getUsers = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM USERS');
    res.json(rows);
}

export const getUser = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM USERS WHERE ID = ?', [req.params.id]);
    res.json(rows);
}

export const createUser = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('INSERT INTO USERS (name, user, pass) VALUES (?, ?, ?)', [
    req.body.name,
    req.body.user,
    req.body.pass
]);
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const updateUser = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('UPDATE USERS SET ? WHERE ID = ?', [
        req.body, req.params.id]);
    console.log("Rs")    
    console.log(results);
    res.sendStatus(204)
}

export const deleteUser = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query('DELETE FROM USERS WHERE ID = ?', [req.params.id]);
    res.sendStatus(204)
    
}