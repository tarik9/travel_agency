import express from 'express';
const router = express.Router();
//middleware niveau routeur
router.get('/' , function(req, res ) {

    res.send('working ...');
})


export default router;