// // ------------------(1)
// var a =1;
// function outer(){
//     function inner(){
//         console.log(a); //undefined
//         var a = 3;
//     }
//     inner(); // ----------(2)
//     console.log(a); //1
// }
// outer(); // -------------(3)
// console.log(a); //1

// // 전역컨텍스트 => outer => inner =>배출은 그반대로


// function a (x){ //수집대상 1 매개변수
//     var x = 1;
//     console.log(x);
//     var x; //수집대상2(변수선언) 1
//     console.log(x);
//     var x = 2; //수집대상3(변수선언)
//     console.log(x);
// }

// a(1)

// function a(){
//     var b; //변수는 선언붐나 끌어올립니다
//     function b(){} // 함수는 전체를끌어올립니다
//     console.log(b);
//     b = 'bbb'; // 변수할당부는 원래자리에 남겨둡니다
//     console.log(b);
//     console.log(b);
// }

// a();


// function a(){} //함수선언문 , 함수명a가 곧 변수명

// var b = function(){} //함수표현식 변수명   b가곧함수명
// b();

// var c = function d(){} // 변수명 c 함수명 d  함수명호출은함수내에서만할숱있다.
// c();
// d();


// console.log(sum(1,2));
// console.log(mutilply(3,4));

// function sum(a,b){
//     return a+b;
// }

// var mutilply =  function(a,b) {
//     return a*b;
// }


// var sum  = function sum (a,b){
//     return a+b;
// };

// var multiply; 
// console.log(sum(1,2));
// console.log(multiply(3,4));

// multiply = function(a,b){
//     return a*b;
// }

// console.log(sum(3,4));

// function sum(x,y) {
//     return x+y;
// }

// var a = sum(1,2);
// function sum(x,y){
//     return x+ '+' + y + '=' +(x+y);
// }

// var c = sum(1,2);
// console.log(c);

var a= 1;
var outer = function(){
    var  inner = function(){
        console.log(a);
        var a= 3;
    };

    inner();
    console.log(a);
};
outer();
console.log(a);