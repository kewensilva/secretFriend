import { Router } from "express";

const routes = Router();

routes.get('/ping', (req, res) => {
    res.json({ ping: true })
})

export default routes;