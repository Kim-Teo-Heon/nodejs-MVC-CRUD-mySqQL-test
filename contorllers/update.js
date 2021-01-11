var update_model=require('../models/update');
const qs=require('qs');

module.exports={
update_data:function(req,res){
  let body='';

  req.on('data',function(data){
    body += data
  })


  req.on('end', function(){
    post = qs.parse(body);

    console.log('before',post.id);

    const input_data= {
        id: post.id,
        list:     post.list,
        status :      'N'
    };
    
    console.log('after',input_data.list);

    update_model.update_data(input_data,function(){
      res.redirect('/');
      console.log("updated success");
    });
  })//데이터 전송이 끝나면 실행
}
}