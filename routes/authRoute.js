import express from "express";
import passport from "passport";

import router from "./profileRoute.js";

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

// Discord Auth
router.get('/discord', passport.authenticate('discord'));
router.get('/discord/callback', passport.authenticate('discord', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

export default router;
