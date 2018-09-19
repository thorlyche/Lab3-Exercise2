let images = ["lab3Pics/1.jpeg", "lab3Pics/2.jpeg","lab3Pics/3.jpeg","lab3Pics/4.jpeg","lab3Pics/5.jpeg" ];
let current = 0;

function next(){
  if(current ==4){
    current =0;
    myImgId.src = images[0];
  }
  else{
    myImgId.src = images[current+1];
    current++;
  }
}

function back(){
  if(current ==0){
    current = 4;
    myImgId.src = images[4];
  }
  else{
    myImgId.src = images[current-1];
    current--;
  }
}
