# Authentication Setup Instructions

## Environment Variables

Create a `.env` file in the backend directory with:

```
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
```

**Important:** Replace `your_secret_key_here` with a strong random string. You can generate one using:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Running the Application

### Backend
```bash
cd backend
npm install
npm start
```

### Dashboard
```bash
cd dashboard
npm install
npm start
```

## API Endpoints

- **POST /auth/signup** - Register new user
  - Body: `{ username, email, password }`
  
- **POST /auth/login** - Login user
  - Body: `{ email, password }`
  
- **GET /auth/verify** - Verify JWT token
  - Headers: `Authorization: Bearer <token>`

## Features Implemented

✅ User registration with password hashing
✅ User login with JWT token generation
✅ Token-based authentication
✅ Protected routes
✅ Auto-redirect to login if not authenticated
✅ Logout functionality
✅ User context management
✅ Token verification on app load
✅ Beautiful login/signup UI

## Testing

1. Start the backend server
2. Start the dashboard
3. Navigate to http://localhost:3000
4. You'll be redirected to /login
5. Click "Sign up" to create an account
6. After signup, you'll be automatically logged in
7. Try logging out and logging back in
8. Access to dashboard routes is protected

## Notes

- Passwords are hashed using bcryptjs
- JWT tokens expire after 7 days
- Token is stored in localStorage
- Axios interceptors handle authentication automatically
