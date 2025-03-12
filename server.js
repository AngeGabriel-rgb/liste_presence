import express from 'express'; // Importer les routes
import { PrismaClient } from '@prisma/client'; // Importer PrismaClient
import {router} from './routes/apprenantRoutes.js'; // Importer les routes
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello World');
});

 // Utiliser les routes
app.use('/apprenants', router);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
