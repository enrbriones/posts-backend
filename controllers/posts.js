const {response} = require('express')

// Base de datos
const db = require('../database/database')
const { post } = require('../routes/posts')


const getPosts =  async (req, res=response) => {
    try {
        const result = await db.query('SELECT * FROM posts')
        res.json({
            ok:true,
            posts:result.rows})
 
      } catch (err) {
        console.log(err.stack)
        res.status(500).json({
            ok:false,
            msg:err.stack
        })
      }
}

const addPost =  async (req, res=response) => {
    const body = req.body
    try {
        const result = await db.query('INSERT INTO posts(name, description) VALUES($1,$2) RETURNING *',[body.name, body.description])
        res.json({
            ok:true,
            post: result.rows
        })
 
      } catch (err) {
        console.log(err.stack)
        res.status(500).json({
            ok:false,
            msg:err.stack
        })
      }
}

const deletePost =  async (req, res=response) => {
    const postId = req.params.id
    try {
        const result = await db.query('DELETE FROM posts WHERE id=$1',[postId])
        res.json({ok:true})
 
      } catch (err) {
        console.log(err.stack)
        res.status(500).json({
            true:false,
            msg:err.stack
        })
      }
}


module.exports={
    getPosts,
    addPost,
    deletePost
}