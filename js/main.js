var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var bookmarks = [] 

function addbookmark(){
    var bookmark = {
        Sname : siteName.value,
        Surl : siteUrl.value, 
    }
    bookmarks.push(bookmark);
    console.log(bookmarks);
    clearData();
    displaybookmarks();
}

function clearData(){
    siteName.value = '';
    siteUrl.value = '';
}

function displaybookmarks(){
    var container = ''
    for (var i = 0 ; i < bookmarks.length; i++){
        container +=
        `
        <tr>
        <td>${i}</td>
        <td>${bookmarks[i].Sname}</td>
        <td>
            <button class="btn btn-success">
                <i class="fa-solid fa-eye"></i>
                Visit
            </button>
        </td>
        <td>
            <button class="btn btn-danger">
                <i class="fa-solid fa-trash-alt"></i>
                Delete
            </button>
        </td>
        </tr>
        `
    }
    document.getElementById("display").innerHTML=container;
}