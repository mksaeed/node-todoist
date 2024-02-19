import '../config/environment';
import  '../config/dbConnect'

import express from 'express';
import cors from 'cors';
import * as http from 'http'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


import indexRouter from '../routes/index-router';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', indexRouter);

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'NodeJS Todoist App',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((request, response) => {
    response.status(404).json({ message: `unknown route: ${request.path}`});
});

const port = Number(process.env.PORT || 3000);
app.set('query parser', 'extended');
app.set('port', port);
const server = http.createServer(app);

function onError(error: { syscall: string; code: any; }) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind =
        typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            break;
        default:
            throw error;
    }
    process.exit(1);
}

function onListening() {
    const address = server.address();
    // @ts-ignore
    const bind =
        typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
    console.log(`Listening on ${bind}`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
