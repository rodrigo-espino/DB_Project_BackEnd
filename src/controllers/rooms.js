import {connect} from '../database'

export const getRooms = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM ROOMS')
    res.json(rows)
}

export const getRoom = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM ROOMS WHERE ID = ?', [req.params.id])
    res.json(rows)
}

export const createRoom = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query('INSERT INTO ROOMS (meters, location, typeof) VALUES (?, ?, ?)', 
    [
        req.body.meters, 
        req.body.location, 
        req.body.typeof])
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const updateRoom = async (req, res) => {
    const connection = await connect()
    await connection.query('UPDATE ROOMS SET ? WHERE ID = ?', [req.body, req.params.id])
    res.sendStatus(204)
}

export const deleteRoom = async (req, res) => {
    const connection = await connect()
    await connection.query('DELETE FROM ROOMS WHERE ID = ?', [req.params.id])
    res.sendStatus(204)
}

