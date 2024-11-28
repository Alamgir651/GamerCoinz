import dotenv from 'dotenv';  
dotenv.config();  

import express from 'express';
import session from 'express-session';  
import MongoStore from 'connect-mongo';
import connectDB from './db/db.js';
import authRoutes from './routes/authRoute.js';
import profileRoutes from './routes/profileRoute.js';

import passport from './config/google&discord.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session Management
app.use(
  session({
    secret: process.env.SESSION_SECRET,  
    resave: false,                      
    saveUninitialized: false,           
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,  
    }),
  })
);

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

