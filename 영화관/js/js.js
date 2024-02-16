let row=6;
let col=8;
let seatList=[]
let seatContainer=document.getElementsByClassName("seatContainer")
let screen = document.getElementsByClassName("screen")
//클릭함수 
let booking=function(event,i,j){
    if(event.target.classList.contains('seat')){
        event.target.classList.replace("seat","occupide")
        seatList.push(i*col+j+1)
    }else{
        event.target.classList.replace("occupide","seat")
        let seatNumber = i*col+j+1
        let index  = seatList.indexOf(seatNumber);
        if(index > -1){  // 그 누른 값이 있을 때
            seatList.splice(index, 1)
        }
    }
    getMovie();

} 
//테이블 생성 
for(let i=0;i<row;i++){
    let div=document.createElement('div')
    div.classList.add("row")
        for(let j=0;j<col;j++){
            let span=document.createElement('span')
            span.classList.add("seat")
            div.appendChild(span)    
            span.addEventListener('click',(event)=>booking(event,i,j))//이벤트걸기
        }
        seatContainer[0].insertBefore(div,screen[0].nextSibling);
}

let movie = document.getElementById("movie")
let count =document.getElementById('count')
let costs=document.getElementById("costs")
    let getMovie=function(){
    let selectedOption = movie.value;
    // const regex=/[^0-9]/g;
    // const result=selectedOption.replace(regex,"")
    // const number =parseInt(result);

    count.innerHTML= seatList.length;
    costs.innerHTML= selectedOption*seatList.length
};  
movie.addEventListener("change",getMovie)
