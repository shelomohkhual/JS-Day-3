// TODO: Autocomplete the input with AJAX calls.
var autoCompleteList = document.getElementById("results");
var searchBar = document.getElementById("search");

searchBar.addEventListener("change",getInput);
searchBar.addEventListener("keyup",getInput);
function getInput(){
    document.querySelectorAll("#results li").forEach((li) => li.parentNode.removeChild(li));
    var ourRequest = new XMLHttpRequest();
    var inputTest = document.querySelector("input[name=\"search\"]").value;
    ourRequest.open("GET",`https://recode-dictionary.herokuapp.com/autocomplete/${inputTest}.json`);
    // debugger;
    ourRequest.onload = function() {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    };
    ourRequest.send();
  });		

function renderHTML(data){
  var htmlString = "";
  var words = data.words;
     
  words.forEach((word)=>{
    var liElement = document.createElement("LI");
    var texts = document.createTextNode(`${word}`);
    liElement.appendChild(texts);
    autoCompleteList.appendChild(liElement);
  });

  // ** Frist Iteration ** 
  // words.forEach((x)=>{
  // htmlString += "<li>"+x+"</li>";
  
  autoCompleteList.insertAdjacentHTML("beforeend", htmlString);
}



