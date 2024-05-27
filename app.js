let hour = document.getElementById("hours")
let mins = document.getElementById("mins")
let sec = document.getElementById("sec")
// console.log(now);
var now = new Date()

if(now.getHours()>12){
    var hours = now.getHours()-12
    
}else{
    var hours = now.getHours()
    

}
setInterval(()=>{
   
    var now = new Date()
    hour.innerText=  (hours<10?"0":"")+ hours
    mins.innerHTML=(now.getMinutes()<10?"0":"")+now.getMinutes()
    sec.innerText=(now.getSeconds()<10?"0":"")+now.getSeconds() 
},1000)