import { Router } from "express";

const routes = Router();

routes.get('/ping', (req, res) => {
    res.json(`Aplicação está funcionando corretamente na Rota Ping!`)
})

export default routes;