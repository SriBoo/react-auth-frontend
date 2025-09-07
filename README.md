

##  `frontend/README.md`

````markdown
# React Auth Frontend

A simple React app for authentication (Register, Login, Dashboard, Logout).  
This frontend is connected to the Node.js + SQLite backend.

##  Features
- Register new user
- Login with session cookies
- Protected dashboard
- Logout functionality

##  Setup

1. Clone repo:
   ```bash
   git clone https://github.com/SriBoo/react-auth-frontend.git
   cd react-auth-frontend
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file (optional but recommended):

   ```
   REACT_APP_API_URL=https://node-auth-backend-lime.vercel.app/auth
   ```

4. Start locally:

   ```bash
   npm start
   ```

5. Build for production:

   ```bash
   npm run build
   ```
