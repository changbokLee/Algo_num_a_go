function isNimble( ){return true;}

assert(typeof window.isNimble === "function", "insNimble() 정의됨."); //이름이 지정된함수를 정의한다 .이름은 현재유효범위전체에서 사용할수있고 암묵적으로 window의 프로퍼티의 추가된다.
assert(isNimble.name =="isNimble", "isNimble() 정의됨."); //첫번째ㅔ테스트는 window객체에서 프로퍼티가 만들어졌늦 ㅣ;를 확읺다 두번째 테스트는 함수의 name 프로퍼티에 값이 기록됬는지 확인한다.

var canFly = function(){return true;}
assert (typeof window.canFly ==="function", "canFly() 정의됨");
assert (cnaFly.name ==="", "canfly()에는 이름이없음");
window.isDeadly = function(){return true;}
assert(typeof window.isDeadly === "function", "isDeadly()정의됨");

function outer(){
    assert(typeof inner ==="function", "inner함수가 정의된위치 앞쪽에서 inner()는 유호함.");
    function inner(){}
    assert(typeof inner ==="function", "inner함수가 정의된위치 앞쪽에서 inner()는 유호함.");
    assert(window.inner === undefined, "전역 유호ㅛ범위에 inner()는 없음");
    
    outer();
    assert(window.inner === undefined, "inner()는 전역유효범위에없음.");
    window.wieldSword = function swingSword(){return true;};
    assert(window.wieldSword.name ==="swingSword", "wieldSword의 실제이름은 swingSword이다");
}