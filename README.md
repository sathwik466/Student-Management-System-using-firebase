# Student Management System (Firebase + JavaScript)

A simple **Student Management System** web application built using **HTML, JavaScript, and Firebase Firestore**.
This project demonstrates **CRUD operations (Create, Read, Update, Delete)** using a cloud database.

## 🚀 Live Demo

Deployed using GitHub Pages.

Example URL:
https://your-username.github.io/student-management-system/

---

## 📌 Features

* ➕ Add new student
* 📄 View student list
* ✏️ Edit student details
* 🔄 Update student data
* ❌ Delete student
* ☁️ Cloud database using Firebase Firestore
* 🌐 Online deployment using GitHub Pages

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Firebase Firestore
* GitHub Pages

---

## 📂 Project Structure

student-management-system

index.html  → User Interface
app.js      → Firebase + CRUD Logic
README.md   → Project Documentation

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/student-management-system.git

### 2. Open the Project

Open the project folder in **VS Code** or any code editor.

### 3. Configure Firebase

1. Go to Firebase Console
2. Create a new project
3. Enable **Firestore Database**
4. Copy the Firebase configuration
5. Replace the configuration in **app.js**

Example:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "XXXX",
appId: "XXXX"
};

---

## 🔥 Firestore Database Structure

students (collection)

studentID1
• name: Sathwik
• age: 20
• course: CSE

studentID2
• name: Sanath
• age: 19
• course: CSE

---

## 🌐 Deployment

This project is deployed using **GitHub Pages**.

Steps:

1. Push code to GitHub repository
2. Go to Repository Settings
3. Select **Pages**
4. Choose **Deploy from main branch**

Your site will be available at:

https://your-username.github.io/student-management-system

---

## 📖 Learning Objectives

This project helps understand:

* Firebase Firestore integration
* JavaScript CRUD operations
* Web application deployment
* Client-side database management

---

## 📜 License

This project is for educational purposes.
