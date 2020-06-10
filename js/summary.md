 
 <pre><code>Array.sort(values , new Comparator<Integer>(){    
     public int compare(Integer value1 , Integer value2){
     } }); => 코드는 컬랙션 수행시에 일어나는 자바명령문이다
values.sort(function(value1,value2) {return value2 - value1;});
</pre></code>
=> 함수형언어의 특징이다.
 *자바스크립트는 함수형언어이다 함수가 왜중요하면 함수는 기본모듈이기 때문이다.
1. 리터럴로 생성될수있다. => 변수에 변하지않는 데이터값.
2. 변수 배열 엘리먼트 다른 객체의 프로퍼티에 할당될수 있다. => 프로퍼티는 속성
3. 함수의 인자로 전달될수있다.
4. 함수의 결과값으로 반환될수있다.
5. 동적으로 생성된 프로퍼티를 가질수있다.
6. 다시 호출되는것은 콜백이다.
7. 자바스크립트는 함수유효범위는 블록이아니라 함수에서 정의된다. 이름가진함수는 그함수범위내에서 유효하다
8. 모든함수호출에는 암묵적으로 arguments와 this 두매개변수가 넘어온다. 암묵적이란 arguments와 this 매개변수가 함수선언에 명시적으로 나타나있지않음을 명시한다.
<pre><code>
if (window){
    var x = 213;
}
alert(x); //다른언어였으면 undefined 가 나와야하는데 자바스크립트를 실행하면 213이나온다 
</pre></code>
 

 