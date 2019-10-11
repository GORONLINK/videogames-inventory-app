import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.configRouter();
    }

    configRouter(): void {
        this.router.get('/', indexController.index);
    }

}

const indexRoutes = new IndexRoutes;
export default indexRoutes.router;