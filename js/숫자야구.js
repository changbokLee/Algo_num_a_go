var 바디 = document.body;

var 숫자배열 = [];
var 숫자후보 = [1,2,3,4,5,6,7,8,9]
var 숫자배열= [];
for (var i = 0; i<4; i+=1){
    var 뽑은것 = 숫자후보.splice(Math.ceil(Math.random()*9),1); //위치개수하면 위치로부터 개수만큼 배열해서뽑는다.
    숫자배열.push(뽑은것);
}

console.log(숫자배열);
var 단어 = document.createElement('div');
단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?';
var 폼  =  document.createElement('form');
var 입력창 = document.createElement('input');
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수() {

});