const express = require('express')
const router = express.Router();   // creating the router

router.get('/', (req,res) => {
	const users = [ 'Adam', 'Morgan', 'Kobe' ];   //creating dummy info
	res.status(200).json(users);    //sending info back
});

module.exports = router;  //exporting router to use in index.js