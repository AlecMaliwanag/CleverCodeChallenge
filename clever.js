'use strict'
const request = require('request');

const params = {
  method: 'GET',
  json: {},
  uri: 'https://api.clever.com/v1.1/sections?limit=100000',
  headers: {
    Authorization: 'Bearer DEMO_TOKEN'
  }
};

request(params, function(err, response, body) { 
  let studentCount = 0;
  const sections = body.data;  
  for (var section of sections) {
      studentCount += section.data.students.length;
  };
  console.log('the number of sections is: ' + sections.length);
  const averageSection = (studentCount / sections.length);
  console.log(`Average number of students per section: ${average_section_size}`);
});