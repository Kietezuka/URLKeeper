import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://urlkeeper-62154-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDatabase = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const saveInputBtn = document.getElementById("save-input-btn");
const inputMemoEl = document.getElementById("input-memo-el");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

function renderList(arr, key) {
  ulEl.innerHTML += `
    <li id="${key}">
      <p>${arr[1]}</p>
      <a href="${arr[0]}" target="_blank">
        ${arr[0]}
      </a>
      <button class="delete-line-btn" onClick="removeLine('${key}')">❌</button>
    </li>`;
}

//attaching a function to the global scope
window.removeLine = function (key) {
  const lineRef = ref(database, `leads/${key}`);
  remove(lineRef).then(() => {
    const removeLi = document.getElementById(key);
    if (removeLi) {
      removeLi.remove();
    }
  });
};

onValue(referenceInDatabase, function (snapshot) {
  const doesSnapshotExist = snapshot.exists();
  if (doesSnapshotExist) {
    const snapshotValue = snapshot.val();
    const leads = Object.entries(snapshotValue);
    ulEl.innerHTML = "";
    for (let i = 0; i < leads.length; i++) {
      const [key, value] = leads[i];
      renderList(value, key);
    }
  }
});

saveInputBtn.addEventListener("click", function () {
  const arr = [inputEl.value, inputMemoEl.value];
  push(referenceInDatabase, arr);
  inputEl.value = "";
  inputMemoEl.value = "";
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDatabase);
  ulEl.textContent = "";
});
