import express, {Application} from 'express';
import morgan from 'morgan'; 
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import { urlencoded } from 'body-parser';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        //Los métodos de configuración se llaman en el constructor para que se ejecuten antes del Start
        this.configurarServidor();
        this.rutas();
    }

    configurarServidor(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //Permite aceptar formatos json de apps cliente
        this.app.use(express.urlencoded({extended: false}));
    }


    rutas(): void{
        this.app.use(indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server listening on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();