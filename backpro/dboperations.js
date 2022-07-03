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
async  function  getReport(sellerId) {
  try {
    let  pool = await  sql.connect(config);
    let  report = await  pool.request()
    .input('input_parameter', sql.NVarChar, sellerId)
    .query("SELECT * from reports where sellerid = @input_parameter");
    return  report.recordsets;
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
    .query("INSERT INTO favorits (username, proid) VALUES (@username, @proid)");
    return  insertFave.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  addReport(report) {
  try {
    let  pool = await  sql.connect(config);
    let  insertReport = await  pool.request()
    .input('type', sql.NVarChar, report.type)
    .input('sellerid', sql.NVarChar, report.sellerid)
    .query("INSERT INTO reports (type, sellerid) VALUES (@type, @sellerid)");
    return  insertReport.recordsets;
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
    .query("INSERT INTO users (username, password, logged) VALUES (@username, @password, @logged)");
    return  insertUser.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  addSeller(seller) {
  try {
    let  pool = await  sql.connect(config);
    let  insertSeller = await  pool.request()
    .input('phone', sql.NChar, seller.phone)
    .input('email', sql.NVarChar, seller.email)
    .input('name', sql.NVarChar, seller.name)
    .query("INSERT INTO sellers (phone, email, name) VALUES (@phone, @email, @name)");
    return  insertSeller.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  addProduct(product) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('proid', sql.Int, product.proid)
    .input('type', sql.NVarChar, product.type)
    .input('brand', sql.NVarChar, product.brand)
    .input('name', sql.NVarChar, product.name)
    .input('price', sql.Float, product.price)
    .query("INSERT INTO products (proid, type, brand, name, price) VALUES (@proid, @type, @brand, @name, @price)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}
async  function  updateSeller(seller,sellerid) {
  try {
    let  pool = await  sql.connect(config);
    let  updateSeller = await  pool.request()
    .input('phone', sql.NChar, seller.phone)
    .input('email', sql.NVarChar, seller.email)
    .input('name', sql.NVarChar, seller.name)
    .input('sellerid', sql.Int, sellerid)
    .query("UPDATE sellers SET  phone = @phone, email = @email, name = @name WHERE sellerid = @sellerid");
    return  updateSeller.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}



module.exports ={
    getProduct: getProduct,
    addUser:  addUser,
    addFave: addFave,
    addProduct: addProduct,
    getProductsbyType: getProductsbyType,
    addReport: addReport,
    getReport: getReport,
    addSeller: addSeller,
    updateSeller: updateSeller
}