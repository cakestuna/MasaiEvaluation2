
let formvalue = document.querySelector("form")
formvalue.addEventListener("submit", function(){
getdata()
})


function getdata(){
    let bookname = document.getElementById("bookname").value
    let authorname = document.getElementById("authorname").value
    let bookdescription = document.getElementById("bookdescription").value
    let date = document.getElementById("date").value
    let bookcaregory = document.getElementById("bookcaregory").value


    let obj = {
        bookn: bookname,
        authorn: authorname,
        bookde: bookdescription,
        datee: date,
        bookca: bookcaregory
    }
    console.log(obj)
}