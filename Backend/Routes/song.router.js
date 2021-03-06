import express from 'express'
import SongController from '../Controllers/song.controller.js'

const controller = new SongController()
const router = express.Router()

router.get('/api/song', (req, res) => { controller.list(req, res) })
router.get('/api/song/:id([0-9]*)', (req, res) => { controller.get(req, res) })
router.post('/api/song/', (req, res) => { controller.create(req, res) })
router.put('/api/song/', (req, res) => { controller.update(req, res) })
router.delete('/api/song/:id([0-9]*)', (req, res) => { controller.delete(req, res) })

export { router }