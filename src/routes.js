const router = require('express').Router()

router.get('/', (req,res)=>{
    return res.send('Deu bom')
});

module.exports = router;