let savedUrl = [];

let localStorageItems = JSON.parse(localStorage.getItem("savedUrl"));

if( localStorageItems )
{
  savedUrl = localStorageItems;
  addUrlToList();
}

function addInputToArray(currentURL) {
  let inputUrl = document.getElementById("input-url");
  if(currentURL)
  {
    inputUrl.value = currentURL; 
  }
  
  savedUrl.push(inputUrl.value);
  localStorage.setItem("savedUrl", JSON.stringify(savedUrl) );
  addUrlToList();
  inputUrl.value = "";
}

function addUrlToList() {
  
  let list = document.getElementById("save-list");
  list.innerHTML = "";

  for (let i = 0; i < savedUrl.length; i++) {
    listItem = document.createElement("li");
    anchor = document.createElement("a");

    anchor.href = savedUrl[i];
    anchor.innerText = savedUrl[i];

    listItem.appendChild(anchor);
    list.appendChild(listItem);
  }
}

function deleteAll() {
  let list = document.getElementById("save-list");
  list.innerHTML = ""; 
  savedUrl = [];
  localStorage.clear();
}

function fetchUrlFromTab()
{
  let currentURL = window.location.href;
  console.log(currentURL);
  addInputToArray(currentURL);
}