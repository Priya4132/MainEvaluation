// let loginObj1=JSON.parse(localStorage.getItem("LoginData"));
// // console.log(usernew[0]);
// // checking user credentials
//  if(loginObj1.email != "user@empher.com"){

 

//     alert("User Not Logged In");
//     window.location.href="index.html";
// }
// else{
//     window.location.href="books.html"
// }

let available=document.getElementById("available");
available.addEventListener("click", async function(){
    console.log("clicked")
    let arr=await getBook ();
    displayBook(arr);   
})


async function getBook(){
    try{
        let res=await fetch("https://scientific-young-ankylosaurus.glitch.me/books");
        let data=await res.json();
        return data;
        console.log(data)
    }
    catch{
        console.log("not able to fetch")
    }
    
}
function displayBook(data){
    let cont=document.getElementById("cont");
    cont.innerHTML=""
let newArr=data.filter((el,i)=>el.isAvailable==true)
newArr.map((el,i)=>{

  
let card=document.createElement("div");

   card.setAttribute("class", "card");
   let title=document.createElement("h4");
   title.textContent=`Title: ${el.title}`
    let author=document.createElement("h4");
   author.textContent=`Author: ${el.author}`
   let category=document.createElement("h4");
   category.textContent=`Category: ${el.category}`
  
//    let verifybutton=document.createElement("button");
//    verifybutton.textContent="Verify Book";
//    verifybutton.setAttribute("class" ,"button")
//    verifybutton.addEventListener("click", async function(){
//     verifyfn(el,i);
//    })
//    let deletebutton=document.createElement("button");
//    deletebutton.textContent="Delete Book";
//    deletebutton.setAttribute("class" ,"button1")
//    deletebutton.addEventListener("click", async function(){
//     deletefn(el,i);
//    })
    let isAvailable=document.createElement("h4");
    if(el.isAvailable==true){
isAvailable.textContent=`Available: Yes`;
    }
    else{
        isAvailable.textContent=`Available: No`
    }

    let isVerified=document.createElement("h4");
    if(el.isVerified==true){
        isVerified.textContent=`Verified: Yes`;
    //     verifybutton.classList.add("verified")
    // }
    }
    else {
        isVerified.textContent=`Verified: No`
    }
    card.append(title,author,category)
    cont.append(card)
    getBook()
})
}