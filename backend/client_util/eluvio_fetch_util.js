
const fetch = require('node-fetch');
const key = require('../config/keys').API_KEY;

async function eluvioFetchAll(items) {
  
    const seen = new Set();
    let responses = [];
    let idx = 0; 

    while(idx < items.length){
        //get the next 5 items
        //fetch them all simultaniusly 
        let nextIdx = 0

        for(let i = 0; i < items.length && i < 5; i++){
            let id = items[idx + i]

            if(seen.has(id)) continue;
            seen.add(id);

            let html = await fetch(`https://eluv.io/items/${id}`,{
                headers: {'Authorization': base}
            })
            .then(html =>  responses.push(html.text()))
            // .then(text => responses.push(text))
            .catch(err => console.log(err))
            nextIdx++ 
        }
        idx += nextIdx
    }
    console.log(responses)
    return responses;
}

module.exports = eluvioFetchAll;