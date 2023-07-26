var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var closBtn = document.querySelector('.fa-circle-xmark');
var large = document.querySelector('.large');
var bookmarks = [];

if(localStorage.getItem("bookmark") !=null ){
    bookmarks = JSON.parse(localStorage.getItem("bookmark"));
    displaybookmarks();
}

function addbookmark(){
    if(validateBookmark() == true){
        var bookmark = {
            Sname : siteName.value,
            Surl : siteUrl.value, 
        }
        bookmarks.push(bookmark);
        localStorage.setItem("bookmark", JSON.stringify(bookmarks));
        console.log(bookmarks);
        clearData();
        displaybookmarks();
    } else {
        large.classList.remove('d-none');
        closBtn.addEventListener('click' , close);
        clearData();
    }
}

function clearData(){
    siteName.value = '';
    siteUrl.value = '';
}

function displaybookmarks(){
    var container = '';
    for (var i = 0 ; i < bookmarks.length; i++){
        container +=
        `
        <tr>
        <td>${i}</td>
        <td>${bookmarks[i].Sname}</td>
        <td>
            <button onclick="vistURL(${i})" class="btn btn-success">
                <i class="fa-solid fa-eye"></i>
                <a href="https://${bookmarks[i].Surl}" target="_blank" class="text-decoration-none text-white">Visit</a>

            </button>
        </td>
        <td>
            <button onclick="deleteBookmark(${i})" class="btn btn-danger">
                <i class="fa-solid fa-trash-alt"></i>
                Delete
            </button>
        </td>
        </tr>
        `
    }
    document.getElementById("display").innerHTML=container;
    console.log(container);
}

function close(){
    // console.log('Closed');
    large.classList.add('d-none');
}

function deleteBookmark(index){
    bookmarks.splice(index,1);
    console.log(bookmarks);
    localStorage.setItem("bookmark", JSON.stringify(bookmarks));
    displaybookmarks();
}

function vistURL(x){
    console.log(x);
}

function validateBookmark(){
    var reg = /^[a-z]{1,8}$/i;
    if (reg.test(siteName.value) == true){
        return true;
    }else {
        return false;
    }
}


large.addEventListener('click' , function(e){
    if (e.target == large){
        close();
    }
})