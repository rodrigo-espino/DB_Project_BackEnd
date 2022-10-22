import {connect} from '../database'

export const Login = async(req, res) => {
    const connection = await connect();
    try{
        const [rows] =  await connection.query('SELECT * FROM USERS WHERE user = ? and pass = ?', [req.params.user, req.params.pass]);
        if(rows.length == 0){
            res.json({msg: 'Null'});
        } else{
            res.json({msg: 'Ok', usr: rows[0].user});
        }
    }
    catch(e){
        res.json(e);
    }
}