import db from '../Config/db.config.js'

class SongModel {
    constructor() {
        console.log('Instance of Class songmodel called');
    }

    list = (req, res) => {
        return new Promise((resolve, reject) => {
            const orderBy = req.query.orderBy || s.id
            const limit = req.query.limit ? `LIMIT ${req.query.limit}` : ''
            const dir = req.query.dir || 'ASC'

            const sql = `SELECT s.id, s.title, a.name AS artist
                             FROM song s
                             JOIN artist a
                             ON s.artist_id = a.id
                             ORDER BY ${orderBy} ${dir}
                             ${limit}
                             `
            db.query(sql, (error, result) => {
                if(result) {
                    resolve(result)
                }else {
                    reject(error)
                }
            })
        }) 
    } // End List

    get = (req, res) => {
        return new Promise((resolve, reject) => {

            const sql = `SELECT s.id, s.title, s.content, s.artist_id, a.name AS artist, s.created
                             FROM song s
                             JOIN artist a
                             ON s.artist_id = a.id
                             WHERE s.id = ?`
            db.query(sql, [req.params.id], (error, result) => {
                if(result) {
                    resolve(...result)
                }else {
                    reject(error)
                }
            })
        }) 
    } // End Get

    create = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrValues = Object.values(req.body)
            const sql = `INSERT INTO song(title, content, artist_id) 
                            VALUES(?,?,?)`       
            db.query(sql, arrValues, (error, result) => {
                if(result) {
                    resolve({ status: true, id: result.insertId })
                } else {
                    reject(error)
                }
            })     
        })
    } // End Create

    update = (req, res) => {
        return new Promise ((resolve, reject) => {
            const arrValues = Object.values(req.body)
            const sql = `UPDATE song 
                            SET title = ?,
                            content = ?,
                            artist_id = ?
                            WHERE id = ?`
            db.query(sql, arrValues, (error, result) => {
                if(result) {
                    resolve({ status: true, id: req.body.id })
                } else {
                    reject(error)
                }
            })
        })
    } // End Update

    delete = (req, res) => {
        return new Promise ((resolve, reject) => {
            const sql = `DELETE FROM song
                            WHERE id = ?`
            
            db.query(sql, [req.params.id], (error, result) => {
                if(result) {
                    resolve({ status: true })
                }else {
                    reject(error)
                }
            })
        })
    }


} // End Class

export default SongModel