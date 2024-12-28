

let loginObj=JSON.parse(localStorage.getItem("LoginData"));
// console.log(usernew[0]);
// checking admin credentials
//  && loginObj[0].email != "admin@empher.com"
// if (loginObj=""){
//     alert("Admin Not Logged In");
//     window.location.href="index.html";
// }
// else{
//     window.location.href="admin.html"
// }

// add book form

let form=document.getElementById("form");
form.addEventListener("submit", async function(){
    event.preventDefault();
    let title=form.title.value;
    let author=form.author.value;
    let category=form.category.value;
    let imageUrl= form.img.value;
    let bookObj={title,author,category, isAvailable:false,isVerified:false , borrowedDays:null, imageUrl}
    //push data to json server
try{
   await  fetch("https://scientific-young-ankylosaurus.glitch.me/books", {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(bookObj)
    })

alert("Book Added Successfully.");
}
catch(err){
    console.log(err);
    alert("Something went wrong")
}

})

window.onload=async()=>{
    let arr=await getBook ();
    displayBook(arr);
}

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

   data.map((el,i)=>{

  
let card=document.createElement("div");

   card.setAttribute("class", "card");
   let title=document.createElement("h4");
   title.textContent=`Title: ${el.title}`
    let author=document.createElement("h4");
   author.textContent=`Author: ${el.author}`
   let category=document.createElement("h4");
   category.textContent=`Category: ${el.category}`
   let verifybutton=document.createElement("button");
   verifybutton.textContent="Verify Book";
   verifybutton.setAttribute("class" ,"button")
   verifybutton.addEventListener("click", async function(){
    verifyfn(el,i);
   })
   let deletebutton=document.createElement("button");
   deletebutton.textContent="Delete Book";
   deletebutton.setAttribute("class" ,"button1")
   deletebutton.addEventListener("click", async function(){
    deletefn(el,i);
   })
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
        verifybutton.classList.add("verified")
    }
    else{
        isVerified.textContent=`Verified: No`
    }
    card.append(title,author,category,isAvailable,isVerified,verifybutton,deletebutton)
    cont.append(card)
    getBook()
})
}

// function for verifying book

async function  verifyfn(el,i){
    let bookId=el.id;
    let updatebook={...el, isVerified:!el.isVerified}
    let newurl="https://scientific-young-ankylosaurus.glitch.me/books"
    if(confirm("Are you sure to verify?")){

    
    try{ 
        await fetch(`${newurl}/${bookId}`, {

        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updatebook)
    })
    alert("Book Verified Successfully");
    getBook();
    }
    catch{
        console.log("not able to update")
    }
}
}

async function  deletefn(el,i){
    let bookId=el.id;
    let updatebook={...el, isVerified:!el.isVerified}
    let newurl="https://scientific-young-ankylosaurus.glitch.me/books"
    if(confirm("Are you sure to delete book")){

   
    try{ 
        await fetch(`${newurl}/${bookId}`, {

        method:"DELETE",
        
    })
alert("Book Deleted Successfully");
getBook();

    }
    catch{
        console.log("not able to delet book")
    }
}
}