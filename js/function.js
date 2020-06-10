function isNimble( ){return true;}

assert(typeof window.isNimble === "function", "insNimble() 정의됨.");
assert(isNimble.name =="isNimble", "isNimble() 정의됨.");

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