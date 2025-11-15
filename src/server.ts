import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';
import { requestInterceptor } from './utils/requestInterceptor';
import routes from './routes/public/index';

const app = express();
app.use(express.json());        
app.use(cors());

app.all('/{*any}', requestInterceptor);
app.use('/public', routes);

app.use(express.urlencoded({ extended: true }));

const startServer = (port: number, server: http.Server) => {
    server.listen(port, ()=> {
        console.log(`runnning server at PORT ${port}`);
        
    })
}
const devServer = http.createServer(app);
    if(process.env.NODE_ENV === 'production') {

    }
    else {
        const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        startServer(serverPort, devServer);
    }