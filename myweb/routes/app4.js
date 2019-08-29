var express = require('express');
var router = express.Router();

/* APP 4 - menerima request method POST dari form */
router.get('/', function (req, res, next){
    res.render('app4');
});

router.post('/', function (req, res, next){
    res.json(
        {
            message: "request POST is executed",
            data: {
                username: req.param('username'),
                email: req.param('email'),
                website: req.param('website'),
                phone: req.param('phone'),
            }
        }
    );
});

module.exports = router;