import db from '../db.js'

class PostsController {
  async createPost(req, res) {
    const { title, content, userId } = req.body
    const post = await db.query(
      `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING * `,
      [title, content, userId]
    )
    res.json(post.rows[0])
  }
  async getAllPosts(req, res) {
    const posts = await db.query('SELECT * FROM post')
    res.json(posts.rows)
  }
  async getUserPosts(req, res) {
    const id = req.params.id
    const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id])
    res.json(posts.rows)
  }
}

export default new PostsController()
