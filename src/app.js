import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import Routes from './routes/routesgym';
import {options} from './swaggerOptions';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const specs = swaggerJSDoc(options);


const app = express();
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.use(Routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
export default app