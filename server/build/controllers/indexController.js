"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'La API está en api/games' });
    }
}
exports.indexController = new IndexController();
