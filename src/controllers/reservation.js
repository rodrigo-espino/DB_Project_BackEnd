import {connect} from '../database';

export const getReservations = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  
        await connection.query('SELECT s.location as "squash_court", m.name_m as "member_id", r.Rdate, r.Rtime, r.id FROM RESERVATION r JOIN SQUASH_COURT s ON s.id = r.squash_court JOIN MEMBERS m ON r.member_id = m.id');
        res.json(rows);
    }
    catch(e){
        res.json(e)
    }
}

export const getReservation = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM RESERVATION WHERE ID = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e)
    }
}

export const createReservation = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('INSERT INTO RESERVATION (member_id, squash_court, Rdate, Rtime) VALUES (?, ?, ?, ?)', [
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
    catch(e){
        res.json(e)
    }
}

export const updateReservation = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('UPDATE RESERVATION SET ? WHERE ID = ?', [
        req.body, req.params.id]);
        console.log("Rs")    
        console.log(results);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
}

export const deleteReservation = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('DELETE FROM RESERVATION WHERE ID = ?', [req.params.id]);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
    
}