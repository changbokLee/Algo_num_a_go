// var obj = {
//     a:1,
//     b: 'bbb'
// };

// obj.a =2;


// var a; //변할수있는ㄷ 데이터를 만든다 데이터의 식별자느 a로한다.
// a = abc; //데이터 할당 
// var a  = 'abc'; //변수선언과 데이터할당을 동시에한다.comment

// var a =  'abc';
// a =a + 'def';
// //메모리를 효과적으로 관리하기위해서

// var a = 'abc';
// a = a + 'def'; //a의값에 abc가 abcdef로바뀌는게아니라 새로운문자열 abcdef로만들어저장합니다.

// var b = 5;
// var c = 5;
// b =7;


// var a = 10; // 기본객체 값.
// var b= a ;
// var obj1 = {c:10 , d:'ddd'}; //참조 객체값
// var obj2 = obj1;

// b= 15;
// obj2.c = 20;



// var a = 10; // 기본객체 값.
// var b= a ;
// var obj1 = {c:10 , d:'ddd'}; //참조 객체값
// var obj2 = obj1;

// b= 15;
// obj2 = {c:20 , d:'dddd'}; //객체자체를 바꿔버림


// var user = {
//     name: 'Jaenam',
//     gender: 'male'
// };

// var changName = function(user , newName){
//     // var newUser = user; //이렇게 필요없는부분에서 객체를선언해서 하는하드코딩보다 함수를이용한코딩이 훨씬좋습니다/
//     // newUser = user;
//     // newUser.name = newName;
//     // return newUser;
//     return {
//         name: newName,
//         gender : user.gender
//     }
// };

// var user2 = changName(user , 'Jung');

// if(user !== user2){
//     console.log('유저정보가 변경되었습니다.');
// }

// console.log(user.name , user2.name); // Jaenam Jung
// console.log(user === user2); // false


// var copyObjet = function(target){
//     var result = {};
//     for (var prop in target) {
//         result[prop] = target[prop];
//     }
// };

// var user = {
//     name: 'Jaenam',
//     urls: {
//         portfolio: 'http://github.com/abc',
//         blog: 'http:blog.com',
//         facebook: 'http://facebook.com/abc',
//     }
// };
// var user2 = copyObjet(user);

// user.name = 'Jung';
// console.log(user.name === user2.name); //false

// user.urls.portfolio = 'http://portfolio.com';
// console.log(user.urls.portfolio === user2.urls.portfolio); //true

// user2.urls.blog ='';
// console.log(user.urls.blog === user2.urls.blog); //true

// //user는 새로운것을 만드는반면에 urls내부의 프로퍼티는 기존데이터를 그대로참조하는것이다.

// var user2 = copyObjet(user);
// user2.urls = copyObjet(user.urls);

// user.urls.portfolio = 'http://porfoilo.com';
// console.log(user.urls.portfolio === user2.urls.portfolio); //false

// user2.urls.blog = '';
// console.log(user.urls.blog = user2.urls.blog); //false
