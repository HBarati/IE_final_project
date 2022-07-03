var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getProduct(productName) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.NVarChar, productName)
    .query("SELECT * from products where name = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getProductsbyType(productType) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.NVarChar, productType)
    .query("SELECT * from products where type = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addFave(fave) {
  try {
    let  pool = await  sql.connect(config);
    let  insertFave = await  pool.request()
    .input('username', sql.NVarChar, fave.username)
    .input('proid', sql.NVarChar, fave.proid)
    .execute('InsertFave');
    return  insertFave.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  addUser(user) {
  try {
    let  pool = await  sql.connect(config);
    let  insertUser = await  pool.request()
    .input('username', sql.NVarChar, user.username)
    .input('password', sql.NVarChar, user.password)
    .input('logged', sql.Bit, user.logged)
    .execute('InsertUser');
    return  insertUser.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports ={
    getProduct: getProduct,
    addUser:  addUser,
    addFave: addFave,
    getProductsbyType: getProductsbyType
}