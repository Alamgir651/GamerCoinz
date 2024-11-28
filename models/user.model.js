// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
      name: { 
        type: String,
        required: true 
    },
  email: { 
    type: String, 
    unique: true, 
    required: true 
},
  googleId: { 
    type: String 
},
discordId: {
    type: String,
  },
  coins: { 
    type: Number, 
    default: 0 
},
  gameAccounts: {
    cod: { type: String },
    dota: { type: String },
    pubg: { type: String },
  },
  challengeStats: {
    totalChallenges: { 
        type: Number, 
        default: 0 
    },
    wins: { 
        type: Number, 
        default: 0 
    },
    losses: { 
        type: Number, 
        default: 0 
    },
  }

});

const User = mongoose.model("User", userSchema);

export default User;
