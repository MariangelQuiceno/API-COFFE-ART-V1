import { db } from '../db/db';
import { Connection } from 'mysql2';

class AuthService {
    private db: Connection;

    constructor() {
        this.db = db;
    }

    // Otros métodos del servicio
}
