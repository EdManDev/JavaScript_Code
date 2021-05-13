function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === 'Google') {
      resolve('Google say Hi ')
    } else {
      reject('we can only talk to Google')
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve('Extra Information')
  })
}


makeRequest('Google').then(response => {

})