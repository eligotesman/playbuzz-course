const express= require('express');
const bodyParser= require('body-parser');
const app = express();


app.get('/health-check', (req,res)=> {
    res.status(200).json({status:"It's alive 222"})
});

app.use(express.static('./public'));

const router = express.Router();
router.use(bodyParser.json());
app.use('/api/v1', router);

require('./src/users/user.router')(router);

app.listen(8081, (err) => {
    if (err) {
        console.error(err);
        throw new err;
    } else {
        console.info('server is up');
    }
});


