// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()
dotenv.config();
const PORT = process.env.PORT || 5002
const MONGO_URI = process.env.MONGODB_URI

// database connection - start
try {
  mongoose.connect(MONGO_URI);
  console.log('Mongodb connected ');
} catch (error) {
  console.log('Database not connected - ',error);
}
// database connection - end

// sample api
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})
