import {connect} from '../database';

export const getSquashes = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM SQUASH_COURT');
        res.json(rows);
    }
    catch(e){
        res.json(e)
    }
}

export const getSquash = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM SQUASH_COURT WHERE ID = ?', [req.params.id]);
        res.json(rows);
    }
    catch(e){
        res.json(e)
    }

}

export const createSquash = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('INSERT INTO SQUASH_COURT (location, cond) VALUES (?, ?)', [
            req.body.location,
            req.body.cond
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

export const updateSquash = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('UPDATE SQUASH_COURT SET ? WHERE ID = ?', [
        req.body, req.params.id]);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
}

export const deleteSquash = async(req, res) => {
    const connection = await connect();
    try{
        const [results] =  await connection.query('DELETE FROM SQUASH_COURT WHERE ID = ?', [req.params.id]);
        res.sendStatus(204)
    }
    catch(e){
        res.json(e)
    }
    
}