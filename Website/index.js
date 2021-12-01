let header = document.getElementById('banner');
let counter = 0;
let bantxt = ["How we perceive shapes our understanding.","How we share shapes what we say.", "How we interact shapes who we are."];
let timeCount = 2500;
let activeText = bantxt[0];
//where to start the text display onload "How we ".
let activeCounter = 6;
let typeCounter = 150;
let backCounter = 80;
//hold time on full string
let holdTime0 = 800;

//hold time after deleting
let holdTime1 = 100;
let forward = true;

let modal;
let modalActive = false;

//event listeners
document.getElementById("project").addEventListener("click", function(){
    dispPg('project');});
document.getElementById("about").addEventListener("click", function() {dispPg('about');});


for (var i = 0; i < document.getElementsByClassName('project').length; i++) {
  let proj = document.getElementsByClassName('project')[i];
    proj.addEventListener('click', function(){launchModal(this.getAttribute('id'))}, false);
    console.log(i);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add('disabled');
  }
}


typeIt();

//functions

//manage project click to launch modal
function launchModal(attribute){
    modal = document.getElementsByClassName('projmodal')[attribute];
    modal.classList.remove('disabled');
    modalActive = true;


    //alert('clicked ' + attribute);
};

function closeModal(){
  modal.addEventListener('click', console.log('closing modal'));
//   if(modalActive == true){
//   console.log("closing modal");
//   modal.classList.add('disabled');
// }
}

//manage banner change array position
function bannerChanger(){
    setTimeout(()=> {


    typeIt();
      activeCounter = 6;
      bannerChanger();

    }, timeCount);
}

//manage banner type and erase
function typeIt(){
  if(forward == true){
    if(activeCounter == bantxt[counter].length){
      setTimeout(()=>{
         forward = false;
         typeIt();
       }, holdTime0);

    }else{
    setTimeout(()=>{
       activeCounter+=1;
        activeText = bantxt[counter].substring(0,activeCounter);
        header.innerHTML=activeText;
        typeIt();
      }, typeCounter);
    }

  }else{
    if(forward == false && activeCounter > 6){
      setTimeout(() =>{
         activeCounter-=1;
         activeText = bantxt[counter].substring(0,activeCounter);
         header.innerHTML=activeText;
         typeIt();
      }, backCounter);
    }
    if(activeCounter == 6){
    setTimeout(()=>{
    if(counter<bantxt.length-1){
            counter += 1;
  }else{
    counter =0;
  }
      activeCounter = 6;
      forward = true;
      typeIt();
  }, holdTime1)
}
}
}


//manage menu selections from navigation
function dispPg(pageName){
  console.log(pageName);
  if(pageName=='about' && document.getElementById('project').className == 'active'){
    var element = document.getElementById("project");
    element.classList.remove("active");
    document.getElementById('projects').classList.add('disabled');
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
    document.getElementsByTagName('nav')[0].style.color = 'white';
    document.getElementById('about').classList.add('active');
  }else if(pageName=='project' && document.getElementById('about').className == 'active'){
      var element = document.getElementById("about");
      element.classList.remove("active");
      document.getElementById('project').classList.add('active');
      document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
      document.getElementsByTagName('nav')[0].style.color = 'black';
      document.getElementById('projects').classList.remove('disabled');
    }
}
