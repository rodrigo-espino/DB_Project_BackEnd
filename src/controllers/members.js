import {connect} from '../database'

export const getMembers = async (req, res) => {
    const connection = await connect()
    try{
        const [rows] = await connection.query('SELECT * FROM MEMBERS')
        res.json(rows)
    }
    catch(e){
        res.json(e)
    }
}

export const getMember = async (req, res) => {
    const connection = await connect()
    try{
        const [rows] = await connection.query('SELECT * FROM MEMBERS WHERE ID = ?', [req.params.id])
        res.json(rows)
    }
    catch(e){
        res.json(e)
    }
}

export const createMember = async (req, res) => {
    const connection = await connect()
   try{
    const [results] = await connection.query('INSERT INTO MEMBERS (name_m, address, phone, profession, bank_det) VALUES (?, ?, ?, ?, ?)', 
    [
        req.body.name, 
        req.body.address, 
        req.body.phone, 
        req.body.profession,
        req.body.bank_det])
    res.json({
        id: results.insertId,
        ...req.body
    })
   }
   catch(e){
         res.json(e)
   }
}

export const updateMember = async (req, res) => {
    const connection = await connect()
    try{
        await connection.query('UPDATE MEMBERS SET ? WHERE ID = ?', [req.body, req.params.id])
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }

}

export const deleteMember = async (req, res) => {
    const connection = await connect()
    try{
        await connection.query('DELETE FROM MEMBERS WHERE ID = ?', [req.params.id])
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
    
}

