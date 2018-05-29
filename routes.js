const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', (req, res) => {

  let response = {
    formId: req.body.formId,
    email: req.body.email
  };
  console.log(response.email);
  axios({
    method: 'post',
    url: 'https://api.fullcontact.com/v3/person.enrich',
    headers: { 'Authorization': 'Bearer oQllYgg7z1JMzqH62kqg3jI0s4ofb9Ev' },
    data: {"email": `${response.email}`}
  })
  .then((response) => {
    res.send(response.data);
    return axios({
      method: 'post',
      url: 'https://copyblondie.bubbleapps.io/version-test/api/1.1/wf/test/initialize',
      headers: { 'Authorization': 'Bearer 98107ac3b7b363d93f1b9e3863b79bee' },
      data: response.data
    })
    .then((response) => {
      console.log('hi')
    })
    .catch((e) => {
      console.log(e);
    })
  })
  .catch((e) => {
    console.log(e);
  })


})

module.exports = router;
