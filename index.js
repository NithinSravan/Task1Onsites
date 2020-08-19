let canvas=document.getElementById("canvas");
let ctx= canvas.getContext("2d");

let funcInput=document.getElementsByClassName("func");
let sinbtn=document.getElementById("sin");
let cosbtn=document.getElementById("cos");
let tanbtn=document.getElementById("tan");
let x, y;
let scale=50;
let clicked=[];
let i=0;
window.onload=()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    clicked[0]=false;
    funcInput[0].addEventListener("click",()=>{
        if(!clicked[0]){
            funcInput[0].style.border="none";
            funcInput[0].style.borderBottom="2px solid green";
            clicked[0]=true;
        }
        else{
            funcInput[0].style.border="none";
            funcInput[0].style.borderBottom="2px solid blue";
            clicked[0]=false;
        }
    })
}

function graph(){
        draw()
}
function draw(){
    let canvy;
    console.log(scale)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i=0;i<funcInput.length;i++){
        for(let posx=-canvas.width/2;posx<canvas.width/2;){

            ctx.beginPath();
            ctx.strokeStyle="white";
            ctx.lineCap="butt";
            ctx.lineWidth=2;
    
            canvx=posx+canvas.width/2;
          
            y=scale*eval(funcInput[i].value);
            canvy=y+canvas.height/2;
            ctx.moveTo(canvx,canvy);
    
            posx+=0.05;
            x=posx/scale;
            canvx=posx+canvas.width/2;
            y=scale*eval(funcInput[i].value);
            canvy=y+canvas.height/2;
            ctx.lineTo(canvx,canvy);
            ctx.stroke();
        }
    }

}
function addFunc(){
    const div=document.createElement("div");
    document.getElementById("wrapper").appendChild(div);
    div.classList.add("func-box");
    const label=document.createElement("label")
    div.appendChild(label)
    label.innerText="f(x) = ";
    const inputEle=document.createElement("input");
    div.appendChild(inputEle)
    inputEle.classList.add("func")
    i++;
    clicked[i]=false;
    inputEle.addEventListener("click",()=>{
        if(!clicked[i]){
            funcInput[i].style.border="none";
            funcInput[i].style.borderBottom="2px solid green";
            clicked[i]=true;
        }
        else {
            funcInput[i].style.border="none";
            funcInput[i].style.borderBottom="2px solid blue";
            clicked[i]=false;
        }
        })
}
function trig(fn){
    for(let i=0;i<funcInput.length;i++){
        if(clicked[i]){
            switch(fn){
                case 'sin':{
                    funcInput[i].value+="Math.sin(x)";
                    clicked[i]=false;
                    break;
                }
            
                case 'cos':{
                    funcInput[i].value+="Math.cos(x)";
                    clicked[i]=false;
                    break;
                }
            
                case 'tan':{
                    funcInput[i].value+="Math.tan(x)";
                    clicked[i]=false;
                    break; 
                }
                    
            }
        }


    }

}
window.addEventListener('keydown', function (e) {
    if (e.key === "w") {
        scale+=5;
        draw()
    }
    else if(e.key==="s"){
        scale-=5;
        draw()
    }

});