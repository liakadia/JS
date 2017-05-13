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
	name:'name',
	age: null
};
//массивы
 var mass=[1,2,3,4,5];

//длинна массива- индекс последнего +1 
document.write(mass.length,"<br>");

//все числовые типы - number
if(typeof mass[0]=='number'){
document.write('выводим если переменная типа number: ',mass[0],'<br>');}
else{
document.write('error');
}
// switch 
var kostia="tralala";
switch(kostia){
	case'trall': document.write('ne'); 	
		case'trala': document.write('ke'); break;
			case'tralala': document.write('fe'); break;
	default: document.write('ma'); 
}

document.write("<br><br>");
var i=0;
while( i< mass.length){
	document.write(mass[i]);
	i++;
}
i=0;
document.write("<br><br>");


do{
document.write(mass[mass.length-i-1]);
	i++;
}while(i<mass.length);


document.write("<br><br>");
