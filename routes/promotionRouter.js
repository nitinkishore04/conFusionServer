const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    next()
})

.get((req, res, next) => {
    res.end('Will Send all promotions to you');
})

.post((req, res, next) => {
    res.end(`Will add the promotion: ${req.body.name} with details: ${req.body.description}`);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT not supported`);
})

.delete((req, res, next) => {
    res.end('Will DELETE all the promotiones');
});


promotionRouter.route('/:promotionId')
.get((req, res, next) => {
    res.end(`Will Send Details of the promotion: ${req.params.promotionId} to you`);
})

.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST not supported on ${req.params.promotionId}`);
})

.put((req, res, next) => {
    res.write(`Updating the promotion: ${req.params.promotionId} \n`);
    res.end(`Will update the promotion: ${req.body.name} with details ${req.body.description}`);
})

.delete((req, res, next) => {
    res.end(`Deleting the promotion: ${req.params.promotionId}`);
});

module.exports = promotionRouter;