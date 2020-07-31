// var ajax_ = new XMLHttpRequest() || ActiveXObject('Microsoft.XMLHTTP')
// ajax_.open('get','http://192.168.1.45:3000/home',true);
// ajax_.send();
// ajax_.onreadystatechange=function (){
//     if(ajax_.readyState==4&&ajax_.status==200){
//         console.log(ajax_)
//     }
// }

var url = 'http://192.168.1.45:3000/home';
$.get(url,{
type:'recommend'
},
function(data){
    console.log(data)
    
})