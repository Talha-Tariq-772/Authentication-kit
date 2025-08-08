

# 🔐 Authentication Kit

**Authentication Kit** is a full-stack authentication system built using **Next.js** for the frontend and **Node.js** for the backend. It offers a secure and feature-rich user authentication and management system with:

* ✅ User Registration & Login
* 🔐 Role-based Access Control
* 📧 Email Verification
* 🔁 Password Reset
* 🛡️ JWT Security

---

## 🛠️ Tech Stack

| Layer        | Technology                       |
| ------------ | -------------------------------- |
| **Frontend** | Next.js                          |
| **Backend**  | Node.js, Express.js              |
| **Database** | MongoDB                          |
| **Auth**     | JWT (JSON Web Token), Bcrypt     |
| **Email**    | Nodemailer (Email & Reset links) |

---

## ✨ Features

### 🔐 Authentication & Authorization

* User Registration with email/password
* JWT-based login and secure session management
* Role-based access (User/Admin)
* Admin Dashboard: View all registered users

### 👤 User Dashboard

* View and edit profile
* Change password securely
* Email verification with one-click action

### 🔁 Forgot Password

* Password reset via email
* Secure token-based reset links
* Easy-to-use reset form

### 🔒 Password Security

* Passwords hashed with Bcrypt
* All sensitive operations are token-protected

---

## 📁 Project Structure

```
Authentication-Kit/
│
├── backend/        # Node.js backend
│   ├── routes/
│   ├── controllers/
│   └── models/
│
├── frontend/       # Next.js frontend
│   ├── pages/
│   └── components/
│
└── README.md
```

---

## 🚀 Getting Started

### 🧱 Clone the Repository

```bash
git clone https://github.com/Talha-Tariq-772/Authentication-kit.git
cd Authentication-kit
```

### ⚙️ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Open your browser and go to **[http://localhost:3000](http://localhost:3000)**

---

## 📬 Email Configuration

Create a `.env` file in the `backend` directory and add:

```env
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
JWT_SECRET=your_jwt_secret_key
```

---

## 📌 Notes

* Email links (verification & reset) are time-limited and token-secured.
* Admin routes and access are strictly role-based.
* JWT is used for route protection across frontend and backend.

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use and modify it as per your needs.


