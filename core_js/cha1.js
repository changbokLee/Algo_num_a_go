var obj = {
    a:1,
    b: 'bbb'
};

obj.a =2;


var a; //변할수있는ㄷ 데이터를 만든다 데이터의 식별자느 a로한다.
a = abc; //데이터 할당 
var a  = 'abc'; //변수선언과 데이터할당을 동시에한다.comment

var a =  'abc';
a =a + 'def';
//메모리를 효과적으로 관리하기위해서

var a = 'abc';
a = a + 'def'; //a의값에 abc가 abcdef로바뀌는게아니라 새로운문자열 abcdef로만들어저장합니다.

var b = 5;
var c = 5;
b =7;