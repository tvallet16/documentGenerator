const fs = require('fs-extra');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');

const htmlToPdf = async (data, templatePath, outputPath) => {

  //  extract html content
  const templateHtml = await fs.readFile(templatePath, 'utf8');
  // parse html content
  const template = handlebars.compile(templateHtml);
  // fill flag by content 
  const finalHtml = template(data);
  // open windows in virtual DOM
  const browser = await puppeteer.launch({ headless: "new" });
  // create page
  const page = await browser.newPage();
  // put html in new page
  await page.setContent(finalHtml, { waitUntil: 'networkidle0' });
  // transdorm to pdf
  const pdf = await page.pdf({ format: 'A4', printBackground: true });
  // save pdf in outputPath
  await fs.writeFile(outputPath, pdf);

  console.log(`PDF généré avec succès: ${outputPath}`);
  await browser.close();
};

module.exports = htmlToPdf;
