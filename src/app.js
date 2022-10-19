import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
//import tasksRoutes from './routes/tasks';
import {options} from './swaggerOptions';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const specs = swaggerJSDoc(options);


const app = express();

app.use(morgan('dev'));
app.use(cors());
//app.use(tasksRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
export default app