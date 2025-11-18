# user-auth-backend
A simple User Authentication System built with Node.js, Express, MySQL, and HTML/CSS. Includes user registration, login, form validation, and database integration.

# User Authentication Form

A simple and complete **User Authentication System** built using:

- **Node.js + Express** (Backend Server)
- **MySQL** (Database)
- **HTML + CSS + JavaScript** (Frontend)
- **Thunder Client / Postman** for API testing

## 🔐 Features

- User Registration
- Email + Password validation
- Confirm Password matching
- Login functionality
- MySQL database integration
- Clean UI forms (Register & Login)
- Backend API with Express
- Data insertion + retrieval

## 📂 Project Structure

## 🚀 How to Run

1. Install dependencies
2. Start the server
3. Open in browser:http://localhost:3000/register.html | http://localhost:3000/login.html

## 🗄 Database Setup

Create a MySQL database:CREATE DATABASE login_project;

Create a users table :
CREATE TABLE users ( 
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) UNIQUE,
password VARCHAR(255) );


## 🤝 Contributions

Open for improvements and suggestions.
