
const fetch = require('node-fetch');
const btoa = require('btoa');

async function eluvioFetchAll(items) {
  
    const seen = {};
    let responses = [];
    let idx = 0; 

    while(idx < items.length){
        let alternatDist = items.length - idx
        let distance =  alternatDist < 5 ? alternatDist : 5

        let fetch1
        let fetch2
        let fetch3
        let fetch4
        let fetch5

        for(let i = 0; i < distance; i++){
            let id = items[idx + i]

            if(id in seen){
                continue;
            }
            seen[id] =  true;

            // let fetchSetup = fetch(`https://eluv.io/items/${id}`,{
            //     headers: {'Authorization': btoa(id)}
            // })

            if(i === 0){
                fetch1 = fetch(`https://eluv.io/items/${id}`,{
                    headers: {'Authorization': btoa(id)}
                })
                .then(res => res.text())
            } else if (i === 1) {
                fetch2 = fetch(`https://eluv.io/items/${id}`,{
                    headers: {'Authorization': btoa(id)}
                })
                .then(res => res.text())
            } else if (i === 2) {
                fetch3 = fetch(`https://eluv.io/items/${id}`,{
                    headers: {'Authorization': btoa(id)}
                })
                .then(res => res.text())
            } else if (i === 3) {
                fetch4 = fetch(`https://eluv.io/items/${id}`,{
                    headers: {'Authorization': btoa(id)}
                })
                .then(res => res.text())
            } else if (i === 4) {
                fetch5 = fetch(`https://eluv.io/items/${id}`,{
                    headers: {'Authorization': btoa(id)}
                })
                .then(res => res.text())
            }
       
        }

        let promises = [fetch1, fetch2, fetch3, fetch4, fetch5];
        promises = promises.filter(promise => promise);

        let results = await Promise.all(promises)
            .catch(err => responses.push(err))
            idx += distance

        results.forEach(data => {
            responses.push(data)
        })   

        
    }
    return responses;
}

module.exports = eluvioFetchAll;