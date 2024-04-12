let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector("#msg-container");
let msg=document.querySelector("#msg");
let count =0;
let started=true;

const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],
[2,4,6],[3,4,5],[6,7,8]];

for(let value of boxes){
    value.addEventListener("click",function(){
        console.log("box was clicked");
        if(started){
            value.innerText="O";
            started=false;
        }
        else{
            value.innerText="X";
            started=true;
        }
        value.disabled=true;
        count++;
        checkwinner();
        if( count=== 9){
            gamedraw();
        }
    });
}
function gamedraw(){
    msg.innerText="Game Draw";
}


function checkwinner(){
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val==pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
}
function showwinner(winner){
    msg.innerText=`congratulations,winner is ${winner}`;
    // msgcontainer.classList.remove("hide");
    btndisable();
}
function btndisable(){
    for(let val of boxes){
        val.disabled=true;
    }
}
function btnenable(){
    for(let val of boxes){
        val.disabled=false;
        val.innerText="";
    }
    msg.innerText="Winner Name !";
    
}
function resetgame(){
    count=0;
    started=true;
    btnenable();
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);





























// resetbtn.addEventListener("click",function(){
//     console.log("reset");
// });
// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//    console.log("box was clicked");
//    console.log("box was clicked");
//    if(started){
//        box.innerText="O";
//        started=false;
//    }
//    else{
//        box.innerText="X";
//        started=true;
//    }
//     });
// });