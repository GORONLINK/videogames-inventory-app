import { Request, Response } from 'express';
import pool from '../database'


class GamesController{
    public async list (req: Request, res: Response) {
        const games = await pool.query("SELECT * FROM juegos");
        res.json(games);
    }

    public async create (req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await pool.query("INSERT INTO juegos SET ?", [req.body]);
        res.json({message: 'Juego creado'});
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const game = await pool.query("SELECT * FROM juegos WHERE id = ?", [id]);
        console.log(game);
        if(game.length > 0) return res.json(game[0]);
        res.status(404).json({message: 'El juego con el ID ' + id + ' no existe'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const game = await pool.query("UPDATE juegos set ? WHERE id = ?", [req.body, id]);
        res.json({message: 'El juego con el ID ' + id + ' fue actualizado'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const game = await pool.query("DELETE FROM juegos WHERE id = ?", [id]);
        res.json({message: 'El juego con el ID ' + id + ' fue eliminado'});
    }
}

const gamesController = new GamesController();
export default gamesController;