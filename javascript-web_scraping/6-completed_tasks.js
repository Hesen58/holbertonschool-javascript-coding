#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) console.log(error);
  else {
    const zor = JSON.parse(body);
    const obj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0
    };
    for (let i = 0; i < zor.length; i++) {
      if (zor[i].completed) {
        obj[zor[i].userId] += 1;
      }
    }
    console.log(obj);
  }
});
