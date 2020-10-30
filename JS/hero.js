const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);
var heroName;
   
var xhrRequest = new XMLHttpRequest();

xhrRequest.onload = function(){
    console.log(xhrRequest.response);
    var responseJson = JSON.parse(xhrRequest.response);
    var result = responseJson;
    $('#image-hero').attr('src',result.image.url);
    heroName= result.name
    document.getElementById('hero-name').innerHTML = heroName;
    document.getElementById('powerstats').innerHTML = result.biography.aliases;
    

};

xhrRequest.onerror = function(){
    console.log("Request Failed");
};

xhrRequest.open('get','https://www.superheroapi.com/api.php/2094240747374418/' + id);
xhrRequest.send();

function addhero(){
    //var heroPresent = localStorage.getItem("id");
    
    if(localStorage.getItem("id")){
       let arr = JSON.parse(localStorage.getItem('id'));
       let x = arr.some(function(a){
           return id ===a; 
       });
       //console.log(x);
       if(!x){
           arr.push(id);
           localStorage.setItem('id',JSON.stringify(arr));
       }else{
           alert("hero present");
       } 
    }else{
        let arr = [];
        arr.push(id);
        localStorage.setItem('id',JSON.stringify(arr));
    }
}
function removehero(){
    //var heroPresent = localStorage.getItem("id");
    
    if(localStorage.getItem("id")){
        alert("hero not present");
        return;
    }0
    // else{
    //     storage.removeItem('id')
    // }
}
