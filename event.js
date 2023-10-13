const EventEmitter = require('events')
const sum=(x,y)=>{
    x = x+y
    y = y-x
    var res = -(x*y)
    console.log(`${res}`)
}
const customEvent = new EventEmitter()

customEvent.on('response',(x,y)=>{
    console.log(sum(x,y))
})
customEvent.emit('response',1,2)