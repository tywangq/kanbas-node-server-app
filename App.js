// const express = require('express');
import express from 'express';
import Routes from "./Routes.js";

// create an express instance
const app = express();

// create a route that responds 'Hello!'
Routes(app);

// listen to http://localhost:4000
app.listen(4000);
