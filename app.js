const express=require('express');
const create = require('./contorllers/create');
const read = require('./contorllers/read');
const url = require('url');
const update = require('./contorllers/update');
const _delete= require('./contorllers/delete');



const app= express();

app.set('view engine','ejs')
app.set('views', './views');

app.use(express.static('./views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    // res.render('crud-form');
    read.read_data(req,res);
})

app.post('/create',function(req,res){
    create.create_data(req,res);

})

app.get('/update',function(req,res){
    var req_url = req.url;
    var query_data = url.parse(req_url, true).query;


    res.render('update-form', {id : query_data.id});
})

app.post('/update_process',function(req,res){
    update.update_data(req,res);
})

app.post('/delete',function(req,res){
    _delete.delete_data(req,res);
})
app.listen(3000);