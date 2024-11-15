import { Router } from 'express';
const router = Router()

router.get('/test', async (req, res) => {
    res.send({message: "Test was successful"}) 
});

export default router;
