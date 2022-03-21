const fs = require("fs");
const puppeteer = require("puppeteer");
const html = fs.readFileSync("./index.html", "utf8");

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(content);
const buffer = await page.pdf({
  format: "A4",
  printBackground: true,
  margin: {
    left: "0px",
    top: "0px",
    right: "0px",
    bottom: "0px",
  },
});
await browser.close();
const options = {
  format: "A4",
  printBackground: true,
  margin: {
    left: "0px",
    top: "0px",
    right: "0px",
    bottom: "0px",
  },
};

const timestamp = new Date().toLocaleString();
const filename = `./Daniel Hall-Eardley ${timestamp}.pdf`;
