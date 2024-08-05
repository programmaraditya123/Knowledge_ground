const express = require('express');
const {dsaContentController,getDsaController, dsaContController,
     mathContentController, getMathController, mathContController,
     operatingsystemContentController,
     getoperatingsystemController,
     operatingsystemContController,
     pythonContentController,
     getpythonController,
     pythonContController} = require('../Controllers/PartsController');

const router = express.Router();


//DSA ROUTES

//post DSA content
router.post('/dsa',dsaContentController);

//get DSA content
router.get('/getdsa',getDsaController);

//get only DSA content and index topic
router.get('/cont/:id',dsaContController);





 
//MATH ROUTES
//POST MATH CONTENT
router.post('/math',mathContentController);

//get math content
router.get('/getmath',getMathController);

//get oonly math content and index topic
router.get('/math/:id',mathContController);








//OPERATING SYSTEM ROUTES
//POST operatingsystem CONTENT
router.post('/operatingsystem',operatingsystemContentController);

//get math content
router.get('/getoperatingsystem',getoperatingsystemController);

//get oonly math content and index topic
router.get('/operatingsystem/:id',operatingsystemContController);








//PYTHON ROUTES
//POST  python CONTENT
router.post('/python',pythonContentController);

//get math content
router.get('/getpython',getpythonController);

//get oonly math content and index topic
router.get('/python/:id',pythonContController);


module.exports = router;