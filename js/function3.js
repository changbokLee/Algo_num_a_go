window.onload = {
    function () {
        assert(true, 'power!');
    }
};

var ninja = {
    shout: function () {
        assert(true, "Ninja");
    }
};

ninja.shout();

setTimeout( //타이머가 만료되면 호출되도록 함수를 settimeout함수에 콜백으로 전달한다 
    function(){assert(true , 'Forever!');},500);
