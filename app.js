import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
getFirestore,
collection,
addDoc,
getDocs,
doc,
deleteDoc,
updateDoc
}

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
apiKey: "AIzaSyAyNuhE0qQH8sfdo2VnMS2cyvCj2_hK7PQ",
  authDomain: "studentmanagementsystem-6a9f1.firebaseapp.com",
  projectId: "studentmanagementsystem-6a9f1",
  storageBucket: "studentmanagementsystem-6a9f1.firebasestorage.app",
  messagingSenderId: "720927758186",
  appId: "1:720927758186:web:345d08d973c51ba15d7713",
  measurementId: "G-9J1CGHZNEJ"


};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let selectedId = null;



window.addStudent = async function(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let course = document.getElementById("course").value;

if(name=="" || age=="" || course==""){
alert("Please fill all fields");
return;
}

await addDoc(collection(db,"students"),{
name:name,
age:age,
course:course
});

clearFields();
getStudents();

};



async function getStudents(){

const querySnapshot = await getDocs(collection(db,"students"));

let html="";

querySnapshot.forEach((docData)=>{

let student = docData.data();

html += `
<tr>
<td>${student.name}</td>
<td>${student.age}</td>
<td>${student.course}</td>

<td>

<button onclick="editStudent('${docData.id}','${student.name}','${student.age}','${student.course}')">
Edit
</button>

<button onclick="deleteStudent('${docData.id}')">
Delete
</button>

</td>

</tr>
`;

});

document.getElementById("studentList").innerHTML = html;

}



window.deleteStudent = async function(id){

await deleteDoc(doc(db,"students",id));

getStudents();

};



window.editStudent = function(id,name,age,course){

document.getElementById("name").value = name;
document.getElementById("age").value = age;
document.getElementById("course").value = course;

selectedId = id;

};



window.updateStudent = async function(){

if(selectedId==null){
alert("Select student to update");
return;
}

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let course = document.getElementById("course").value;

await updateDoc(doc(db,"students",selectedId),{
name:name,
age:age,
course:course
});

selectedId=null;

clearFields();
getStudents();

};



function clearFields(){

document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("course").value="";

}



getStudents();