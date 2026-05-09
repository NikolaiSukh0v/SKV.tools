import { Router } from 'express';
import {
  createTool,
  getTools,
  getToolById,
  updateTool,
  deleteTool,
} from '../controllers/ToolController';

const router = Router();

router.post('/', createTool);
router.get('/', getTools);
router.get('/:id', getToolById);
router.put('/:id', updateTool);
router.delete('/:id', deleteTool);

export default router;
