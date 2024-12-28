const navbar=()=>{
    let card= `
      <div id="nav-links">
        <a href="./index.html">Home</a>
        <a href="./admin.html">Admin</a>
        <a href="./books.html">Books</a>
    </div>`
    document.getElementById("nav").innerHTML=card;
}

navbar();