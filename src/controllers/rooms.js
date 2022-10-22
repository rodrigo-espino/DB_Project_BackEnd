import {connect} from '../database'

export const getRooms = async (req, res) => {
    const connection = await connect()
    try{
        const [rows] = await connection.query('SELECT * FROM ROOMS')
        res.json(rows)
    }
    catch(e){
        res.json(e)
    }
}

export const getRoom = async (req, res) => {
    const connection = await connect()
    try{
        const [rows] = await connection.query('SELECT * FROM ROOMS where id = ?', [req.params.id])
        res.json(rows)
    }
    catch(e){
        res.json(e)
    }
}

export const createRoom = async (req, res) => {
    const connection = await connect()
    try{
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
    catch(e){
        res.json(e)
    }
}

export const updateRoom = async (req, res) => {
    const connection = await connect()
    try{
        await connection.query('UPDATE ROOMS SET ? WHERE ID = ?', [req.body, req.params.id])
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
}

export const deleteRoom = async (req, res) => {
    const connection = await connect()
    try{
        await connection.query('DELETE FROM ROOMS WHERE ID = ?', [req.params.id])
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
}

