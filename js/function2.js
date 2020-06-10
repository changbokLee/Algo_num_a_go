// var o = {};
// o.whatever = function() {};
// o.whatever();

// //함수 =메서드라 불림

// function creep() {return this;}
// assert(creep() === window, "창문에서 살살기어가고있음");
// var sneak = creep;
// assert(sneak()== window, "창문에서 살금살금 움직이고있음");
// var ninja1 = {
//     shulk: creep 
// };

// var ninja2 = {
//     shulk: creep
// };

// assert(ninja2.shulk() == ninja2 , "두번쨰 닌자가 숨어있다.");

//생성자 호출하기



function Ninja(){ //함수콘텍스트가 어떤
    this.shulk = function() {
        return this;
    }

    var ninja1 = new Ninja();
    var ninja2 = new Ninja();
    console.assert(ninja1.shulk() === ninja1 , "첫번쨰 닌자가 숨어있다.");
    console.assert(ninja2.shulk() === ninja2 , "두번쨰 닌자가 숨어있다.");
}