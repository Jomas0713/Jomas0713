const btnlike1=document.getElementById("btnlike1")
const countlikes1=document.getElementById("countlikes1")

function clicklike1(){
let totallikes1 = parseInt(countlikes1.value)+1
countlikes1.textContent = totalLikes1.toString()
}
btnLike1.AddEventListener("click",clicklike1)
