import {connect} from '../database';

export const getInstructors = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM INSTRUCTORS');
    res.json(rows);
}

export const getInstructor = async(req, res) => {
    const connection = await connect();
    const [rows] =  await connection.query('SELECT * FROM INSTRUCTORS WHERE SNO = ?', [req.params.id]);
    res.json(rows);
}


export const createInstructor = async(req, res) => {
    const connection = await connect();
    const [results] =  await connection.query("INSERT INTO INSTRUCTORS (name, phone, experience, degree) VALUES (?, ?, ?, ?)", [
    req.body.name,
    req.body.phone,
    req.body.experience,
    req.body.degree
]);
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const updateInstructor = async(req, res) => {
    const connection = await connect();
    await connection.query('UPDATE INSTRUCTORS SET ? WHERE SNO = ?', [
        req.body, req.params.id]);
    res.sendStatus(204)
}

export const deleteInstructor = async(req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM INSTRUCTORS WHERE SNO = ?', [req.params.id]);
    res.sendStatus(204)
}