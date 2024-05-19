#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) console.log(error);
  else {
    const zor = JSON.parse(body);
    const obj = {};
    for (let i = 0; i < zor.length; i++) {
      if (zor[i].completed && !obj[zor[i].userId]) {
        obj[zor[i].userId] = 1;
      }
      else if (zor[i].completed) {
        obj[zor[i].userId] += 1;
      }
    }
    console.log(obj);
  }
});
