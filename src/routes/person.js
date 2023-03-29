let express = require('express');//iniciamos express
let router = express.Router(); //Usamos el Router de express para poder usar este archivo fuera

router.get('/person',(req,res)=>{
    res.send('has solicitado el listado de personas');
})

module.exports = router;