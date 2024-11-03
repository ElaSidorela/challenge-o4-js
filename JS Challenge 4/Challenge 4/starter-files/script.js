let num = 0;
let number=0;

function filling(){
    let load = document.getElementById('loading');
    load.style.width=num.toString()+'%';
    num=num+number;
}




function start(){
    let studyDuration = document.getElementById('studyDuration').value;
    let breakDuration = document.getElementById('breakDuration').value;
    let sum = parseInt(studyDuration)+parseInt(breakDuration);
    // console.log(parseInt(studyDuration)+parseInt(breakDuration));
    number=(100/sum)/60;
    // num=(100/sum)/60;

    myInterval=setInterval(filling,1000);
    let forTimeout=(sum*60*1000)+1000;
    // console.log(forTimeout);
    
    setTimeout(() => {
        console.log('You finished!');
        clearInterval(myInterval);
        addInLstorage(studyDuration,breakDuration);
    }, forTimeout);
}

// function formatDateTime(date) {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); 
//     const year = date.getFullYear();
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
//     return `Date : ${day}/${month}/${year} Time : ${hours}:${minutes}:${seconds}`;
//   }



// const currentDate = new Date();
// const formattedLocalDate = currentDate.toLocaleDateString();
// const formattedInSpecifiedFormat = currentDate.toLocaleDateString(&quot;hi-IN&quot;);
// console.log(formattedLocalDate);
// console.log(formattedInSpecifiedFormat);

function addInLstorage(study,breakk){
    window.alert('Study Ended');
    let date=new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    let formatDateTime=`Date : ${day}/${month}/${year} Time : ${hours}:${minutes}:${seconds}`;
    console.log(localStorage.length+formatDateTime+' Study : '+study+',Break : '+breakk)
    localStorage.setItem(localStorage.length,formatDateTime+' Study : '+study+',Break : '+breakk);
    displayLocal();
}



  function displayLocal(){
    let history=document.getElementById('historyItem');
    history.innerHTML='';
    for(let i=0;i<localStorage.length;i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        let para=document.createElement('p');
        let text=document.createTextNode(value);
        para.appendChild(text);
        let history=document.getElementById('historyItem');
        history.appendChild(para);
    }
  }
  displayLocal();