document.getElementById("searchHero").onkeyup = fetchHero;
var suggestList = document.getElementById("suggestion");
let id;

async function fetchHero() {
   
    var input = document.getElementById("searchHero").value;
    if (input === "") {
        clearList();
        return;
    }
    await clearList();
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function () {
    var responseJson = JSON.parse(xhrRequest.response);
    var result = responseJson.results;
    console.log(result);
        for (let r of result) {        
            let newEle = document.createElement("li");
            newEle.innerText = r.name;
            newEle.classList.add('list-group-item');
            newEle.addEventListener('click', async function(){
                id = r.id;
                await clearList();
                document.getElementById('searchHero').value = r.name;
                return;
            })
            suggestList.appendChild(newEle);
        }
        };
    xhrRequest.onerror = function () {
        console.log("Request Failed");
    };
xhrRequest.open("get","https://www.superheroapi.com/api.php/2094240747374418/search/" + input.trim());
xhrRequest.send();
}

function clearList() {
    if (suggestList.hasChildNodes()) {
        while (suggestList.firstChild) {
            suggestList.removeChild(suggestList.firstChild);
        }
    }
}

// document.getElementById('searchHero').addEventListener('keydown', function(ev){
//     if(ev.keyCode==13){
//             showHero();
//     }
// });

document.getElementById('btn-search').onclick = showHero;
function showHero(){
    if(id===undefined){
        return;
    }
    document.getElementById('searchHero').value = '';
    window.open('hero.html?id='+id,'blank');
}
