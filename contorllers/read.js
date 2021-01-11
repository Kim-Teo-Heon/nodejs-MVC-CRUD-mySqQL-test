const read_model=require('../models/read');


module.exports={
 read_data:function(req,res){
    
    read_model.read_data(function(data){
    
    res.render('index', {data: data}); 
    });
  }
}


