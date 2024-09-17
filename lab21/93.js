const EventEmitter= require("events");
class MyEmmiter extends EventEmitter{
    starticks(){
        setInterval(()=>{
            this.emit('abc');
        },1000)
    }
}
var ticker = new MyEmmiter();
ticker.on('abc',function(){
    console.log("Tick fired !");

});
ticker.starticks();