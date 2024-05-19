#!/usr/bin/node

const request = require('request');

request(process.argv[2], (err, response, body) => {
  if (err) console.log(err);
  else {
    const films = JSON.parse(body).results;
    let count = 0;
    for (let i = 0; i <= 6; i++) {
      films[i].characters.forEach(character => {
        if (character.includes('/18/')) count++;
      });
    }
    console.log(count);
  }
});
