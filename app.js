const express = require('express');
const app = express();
const port = 3000;
const readJson = require('./function/readJson');

const htmlToPdf = require('./function/htmlToPdf');

app.get('/', async (req, res) => {

    // extract content flag
    const data = await readJson('./asset/attestation.json')
    const templatePath = './asset/test.html';
    const outputPath = 'output.pdf';

    await htmlToPdf(data, templatePath, outputPath);
    res.send("success")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});