var Db = require('./dboperations');
var User = require('./User');
var Product = require('./Product');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.route('/products/:name').get((request, response) => {
    Db.getProduct(request.params.name).then((data) => {
      response.json(data[0]);
    })
  })

  router.route('/products/:type').get((request, response) => {
    Db.getProductsbyType(request.params.type).then((data) => {
      response.json(data[0]);
    })
  })

router.route('/users').post((request, response) => {
  let  user = { ...request.body }
  Db.addUser(user).then(data  => {
    response.status(201).json(data);
  })
})
router.route('/faves').post((request, response) => {
    let  fave = { ...request.body }
    Db.addFave(fave).then(data  => {
      response.status(201).json(data);
    })
  })

var port = 3000;
app.listen(port);

