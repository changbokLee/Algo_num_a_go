// var o = {};
// o.whatever = function() {};
// o.whatever();

// //함수 =메서드라 불림
window.onload = function(){
function creep() {return this;}
assert.ok(creep() === window, "창문에서 살살기어가고있음");
var sneak = creep;
assert(sneak()== window, "창문에서 살금살금 움직이고있음");
}