let express = require('express');
let cors = require('cors');
let eluvioFetchAll = require('./client_util/eluvio_fetch_util')
let app = express();

app.use(express.json(), cors());
app.get('/', (req, res) => res.json(`localhost:${port}`))
app.post('/', (req, res) => {
    eluvioFetchAll(req.body)
        .then(pages => res.json(pages))
        .catch(err => {
            console.log(err)
            res.status(404).json(err)})

})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on ${port}`))