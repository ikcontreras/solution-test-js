const NETWORK_ERROR_PROBABILITY = 0.1;

function fakeFetch(ad, cb) {
  const fakeResponses = [
    { ad: 1, title: 'The first ad' },
    { ad: 2, title: 'The second ad' },
    { ad: 3, title: 'The third ad' },
    { ad: 4, title: 'The forth ad' },
    { ad: 5, title: 'The last ad' },
  ];
  const randomDelay = (Math.round(Math.random() * 1E4) % 40) + 1000;

  setTimeout(() => {
    const networkError = Math.random() <= NETWORK_ERROR_PROBABILITY;
    const currentAd = fakeResponses.find(resp => resp.ad === ad);

    if (networkError) {
      cb('Network error');
    } else {
      cb(null, currentAd);
    }
  }, randomDelay);
}

function fetchPromise(adNumber) {
  return new Promise((resolve, reject) => {
      fakeFetch(adNumber, (err, ad) => {
        if (!err) {
          resolve(`${ad.title}`)
        } else {
          reject(`${adNumber}`)
        }
      });
  })
}


Promise.all([
  fetchPromise(1),
  fetchPromise(2),
  fetchPromise(3),
  fetchPromise(4),
  fetchPromise(5)
]).then((res) => {
  res.map( ad => {
    console.log(ad)
  })
  console.log("Done!")
}).catch( msg => {
  console.log(`Failed to load the ad ${msg}`)
})
