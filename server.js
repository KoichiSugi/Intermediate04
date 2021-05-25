const express = require('express');
const fetch = require("node-fetch");
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/test', async (req, res) => {
    let response = await fetchAPI();
    res.json({data: {...response}});
});

const fetchAPI = async () => {
    const res = await fetch('https://myfxmarkets.com/1eb7daee5f804bd6b3698ba6a11aa41d/index.php/Jsontest');
    return res.json();
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})