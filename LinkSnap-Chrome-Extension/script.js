
let savedUrl = [];

let localStorageItems = JSON.parse(localStorage.getItem("savedUrl"));

if (localStorageItems) {
  savedUrl = localStorageItems;
  addUrlToList();
}

document.getElementById("save-input").addEventListener("click", function () {
  addInputToArray();
});

document.getElementById("save-tab").addEventListener("click", function () {
  fetchUrlFromTab();
});

document.getElementById("delete-all").addEventListener("click", function () {
  deleteAll();
});

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

function fetchUrlFromTab() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    let currentURL = (tabs[0].url);
    addInputToArray(currentURL);
  });
}



