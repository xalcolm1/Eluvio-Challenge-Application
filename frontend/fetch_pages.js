//form

const newId = document.getElementById('new_id');
const addId = document.getElementById('add_id');
const fetchPages = document.getElementById('fetch_pages');
const collectiveIds = document.getElementById('collective_ids');

let windows = {};
let pageIds = [];
let nextId = '';

// handle text input
newId.addEventListener('change', () => nextId = newId.value)

// add any values from the input
addId.addEventListener('click', handleAddId)

//collect pages for all ids
fetchPages.addEventListener('click', handleCollection)

// add current value
//turn next value into <li>, add it to collectiveIds list
//clear nextId and clear input box
function handleAddId(){
    if(nextId < 1) return false; 
    nextId = nextId.split(' ')
    pageIds.push(...nextId)
    nextId = nextId.join('</li><li>');

    nextId = `<li>${nextId}</li>`;
    collectiveIds.innerHTML = collectiveIds.innerHTML + nextId

    nextId = '';
    newId.value = '';
}

//get pages
function handleCollection() {
    collectiveIds.innerHTML =  '';
    getPagesByIds(pageIds)
        .then(html => {
            if(html){
                html.forEach((page, idx) => {
                    window.open("","_blank",'PopUp').document.write(page);
                })
            }
        })
    pageIds = [];
}

//call api to use backend util
async function getPagesByIds(ids){
    let pages = await fetch('http://localhost:5000/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
    })
    .then(pages => pages.json())
    .catch(err =>  collectiveIds.append(`${err}`))

    return pages
}



