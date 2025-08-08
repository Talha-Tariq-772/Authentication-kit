Authentication Kit
Authentication Kit is a full-stack authentication system built with Next.js (frontend) and Node.js (backend). It provides secure and robust user authentication and management features, including user registration, login, role-based access control, email verification, and password reset functionalities.

🛠 Tech Stack
Frontend: Next.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token), Bcrypt

Mailing Service: Nodemailer (for verification and password reset emails)

✨ Features
🔐 Authentication & Authorization
User registration with email and password

Secure login with JWT token-based authentication

Role-based access for Users and Admins

Admin Dashboard: View list of all registered users

🧑 User Dashboard
View user profile details

Edit profile (name, email, etc.)

Change password (by providing current and new passwords)

Verify email with one-click action — sends a verification email

🔁 Forgot Password
Available on the login page

User enters their email

An email is sent with a secure link

Clicking the link opens a password reset form

🔒 Password Security
All passwords are securely hashed using Bcrypt

Sensitive operations are protected by token verification
📁 Project Structure

Authentication-Kit/
│
├── backend/        # Node.js & Express backend
│   └── routes/
│   └── controllers/
│   └── models/
│
├── frontend/       # Next.js frontend
│   └── pages/
│   └── components/
│
├── README.md
🚀 Getting Started
Clone the Repository

git clone https://github.com/Talha-Tariq-772/Authentication-kit.git
cd authentication-kit
Backend Setup
cd backend
npm install
npm run dev

Frontend Setup
cd frontend
npm install
npm run dev
Open http://localhost:3000 to view the frontend in your browser.

📨 Email Configuration
Set up environment variables to use your email provider in the .env file:

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password
JWT_SECRET=your_jwt_secret
📌 Notes
Email verification and password reset links are time-limited and secured via tokens.

Admin access is restricted and based on user roles in the database.

Token-based protected routes on both frontend and backend.

📄 License
This project is open-source and available under the MIT License.

