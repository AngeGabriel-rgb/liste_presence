import express from 'express';
import { getAllApprenant,
         getApprenantsById,
         createApprenant,
         updateApprenant,       

} from '../controllers/apprenantController.js';
const router = express.Router();

//routes pour recuper tous les apprenants
router.get('/', getAllApprenant);
//routes pour recuper un apprenant par son id
router.get('/:id', getApprenantsById);
//routes pour creer un apprenant
router.post('/', createApprenant);
//routes pour modifier un apprenant
router.put('/:id', updateApprenant);
//routes pour supprimer un apprenant
router.delete('/:id', deleteApprenant);
      
export default router;

