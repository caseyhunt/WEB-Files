console.log('hello!');

let pics = 8;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
  document.getElementById('portfolio').innerHTML += "<div class='pimage'><img src='assets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic" + pic+ "' /><div class='overlay'></div>";
}

// NEW CODE
let displaydetails = false;
document.getElementById('portfolio').addEventListener("click", showDetails);
function showDetails(){
  document.getElementById('details').style.display = "block";
  document.getElementById('detailsoverlay').style.display = "block";
  let overlay = document.getElementById('detailsoverlay');
  overlay.addEventListener("click", clickedTrigger);
  displaydetails = true;
}


function clickedTrigger(e){
  if(e.target.id != "details" && displaydetails == true){
    document.getElementById('details').style.display = "none";
    document.getElementById('detailsoverlay').style.display = "none";
    displaydetails = false
  }else{
    displaydetails = true;
  }
  console.log('clicked');
  console.log(e.target.id);
}
