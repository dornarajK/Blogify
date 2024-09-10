// * this module is going to allows to make a request

const axios = require('axios');
const { query } = require('express');
const { param } = require('../routes/rauter');
exports.articals = (req, res) => {
  axios.get("http://localhost:3000/api/blog")
    .then(function (response) {

      res.render('index', { blog: response.data });

    }).catch(err => {
      res.send(err)
    })

}



exports.updateArtical = (req, res) => {
  axios.get('http://localhost:3000/api/blog', { params: { id: req.query.id } })
    .then(function (blogdata) {
      res.render('Update-Artical', { blog: blogdata.data }); 
    })
    .catch(err => {
      res.send(err);
    });
};


exports.readMore = (req, res) => {
  axios.get('http://localhost:3000/api/blog', { params: { id: req.query.id } })
    .then(function (readMoreData) {
      res.render('readMore', { blog: readMoreData.data });
    })
    .catch(err => {
      res.send(err);
    });
};


exports.addArtical = (req, res) => {
  res.render('add-Artical');
}