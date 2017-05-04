//'use strict' использовать последние версии js 

// преобрадования
var user ={};

user.name="Костя";
user.age=20;
user['bitrhday']='29.05.1993';


document.write("name=",user.name,"<br>");// делает противоположный знак
document.write("age=",user.age,"<br>");
document.write("bitrhday=",user['bitrhday'],"<br>");
delete user['bitrhday'];
document.write("bitrhday=",user['bitrhday'],"<br>");

//или такое обьявление
var test ={
	name:'name'
};



