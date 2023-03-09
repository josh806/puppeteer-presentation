// import npm package
const puppeteer = require('puppeteer');

const runPuppeteer = async () => {
  //
  // Launch a browser
  const browser = await puppeteer.launch({ headless: false });

  // Open a page on the browser
  const page = await browser.newPage();

  // Open URL you want to scrape on created page
  await page.goto(
    'https://codeworks.me/barcelona/software-engineering-immersive-course/'
  );

  // Set viewport
  // Has to have width and height set
  await page.setViewport({ width: 1080, height: 1024 });

  // Type into search
  // Button click
  // await page.click('.ast-custom-button-link');

  // Evaluate JavaScript
  const three = await page.evaluate(() => {
    const staff = document.querySelector(
      '.uael-gallery-parent.uael-caption-on-image.uael-gallery-unjustified'
    );

    const xavi = staff.querySelector('.uael-img-gallery-item-5');

    const xaviData = {
      name: xavi.querySelector('.uael-grid-caption-text').textContent,
      image: xavi.querySelector('img').getAttribute('src'),
    };

    console.log(xaviData);
  });

  // console.log(three);

  // Close browser
  // await browser.close();
};

runPuppeteer();
