const express = require('express');
const router = express.Router();

const app = express();



exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        page_name: "index"
    });
};

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
};

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: "register"
    });
};

