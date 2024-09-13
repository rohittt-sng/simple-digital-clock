const clock =document.getElementById('clock')
// or 
// document.querySelector('#clock')



//it show that  how much time after you want to run contineously that method setinterval

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)

