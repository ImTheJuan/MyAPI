// Initialize express router
const { Router } = require('express');

const router = Router();

// Import controller
const controller = require('../controllers/controller');

// Set default API response
router.get('/test', (req, res) => res.send('API is running'));

// Contact routes
router.get('/', controller.getUser);
router.post('/', controller.createUser);
router.delete('/', controller.deleteUser);
router.patch('/', controller.viewUser);

// Export API routes
module.exports = router;
