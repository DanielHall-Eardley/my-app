const catchAsyncError = require("../../util/catchAsyncError");
const puppeteer = require("puppeteer");
const host = process.env.HOST;

async function getResumePage(browser, baseUrl = host) {
  const page = await browser.newPage();
  await page.goto(`${baseUrl}/view/resume`);
  return page;
}

async function formatResume(page) {
  const modifiedStyles = `
    .aboutMe { padding-right: 0 };
    .footer { display: none };
  `;

  await page.addStyleTag({ content: modifiedStyles });
  return page;
}

function createFileName(name = "Daniel Hall-Eardley") {
  const filename = `./${name} Resume.pdf`;
  return filename;
}

async function createResumePdf(page) {
  const options = {
    format: "A4",
    printBackground: true,
  };

  const buffer = await page.pdf(options);
  return buffer;
}

exports.downloadResume = catchAsyncError(async (req, res, next) => {
  const browser = await puppeteer.launch({ headless: true });
  const resumePage = await getResumePage(browser);
  const formattedResumePage = await formatResume(resumePage);
  const buffer = await createResumePdf(formattedResumePage);
  await browser.close();
  res.attachment(createFileName());
  res.send(buffer);
});
