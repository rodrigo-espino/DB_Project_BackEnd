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
    const [rows] =  await connection.query('INSERT INTO USERS SET ?', [req.body]);
    res.json(rows);
}
