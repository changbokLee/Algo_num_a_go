function log(){
    try {
        console.log.apply(console, arguments); //가장일반적인 메서드를 이용해서 메시지 로깅을 시도한다.
    }
    //로깅중의 모든실패를 감지한다
    catch(e) {
        try {
            onpointercancel.postError.apply(opera ,arguments); //오페라에서 사용하는 방식을 시도한다.
        }
        catch(e){
            alert(Arrray.prototype.join.call(arguments, "")); //모든경우가 다 실패하면 alert를이용한다
        }
    }
}