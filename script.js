let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".btn");
let playerO=true;
let msgd=document.querySelector(".winner");
let newbtn=document.querySelector("#new_btn");
let msg=document.querySelector("#msg");

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener(("click"), () =>{
        console.log("btn clicked");
        if(playerO){
         box.innerText="o";
         playerO=false;
        }
        else {
            box.innerText="x";
            playerO=true;
        }
        box.disabled=true;
        checkwinner();
        
        })
});



const print_winner=(won)=>{
    msg.innerText=`Congrats The Winner IS "${won}"`
    msgd.classList.remove("hide");
    disableboxes();
};

const checkwinner=() =>{
    for(let pattern of patterns){
          let pos1 =boxes[pattern[0]].innerText;
          let pos2 =boxes[pattern[1]].innerText;
          let pos3 =boxes[pattern[2]].innerText;
          if(pos1!="" && pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
               print_winner(pos1);
            }
          }
    
    }
};
 const resetg=()=>{
    playerO=true;
    enableboxes();
    msgd.classList.add("hide");
 };


const disableboxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
reset.addEventListener("click",resetg);
newbtn.addEventListener("click",resetg);