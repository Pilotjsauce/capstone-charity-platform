import { Router } from 'express'; // Import the Router module from the Express library
const router = Router() // Create a new router instance

router.get('/test', async (req, res) => { // Define a GET route at the '/test' endpoint
    res.send({message: "Test was successful"}) // Send a JSON response with a success message
});

export default router;// Export the router to be used in other parts of the application