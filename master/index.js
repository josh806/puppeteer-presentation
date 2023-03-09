// import npm package
const puppeteer = require('puppeteer');

const runPuppeteer = async () => {
  //
  // Launch a browser
  const browser = await puppeteer.launch({ headless: false });

  // Open a page on the browser
  const page = await browser.newPage();

  // Open URL you want to scrape on created page
  const url =
    'https://codeworks.me/barcelona/software-engineering-immersive-course/';
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Set viewport
  // Has to have width and height set
  await page.setViewport({ width: 1080, height: 1024 });

  // ------ OPTIONAL ----------
  // Type into search
  // Button click
  // await page.click('.ast-custom-button-link');

  // Evaluate JavaScript
  const result = await page.evaluate(() => {
    const staff = document.querySelector(
      '.uael-gallery-parent.uael-caption-on-image.uael-gallery-unjustified'
    );

    const xavi = staff.querySelector('.uael-img-gallery-item-5');
    const xaviImageTag = xavi.querySelector('img');

    const xaviData = {
      name: xavi.querySelector('.uael-grid-caption-text').innerText,
      image: xaviImageTag.getAttribute('src'),
    };

    //
    // -------------- OPTIONAL DEPENDING ON TIME ------------------
    // const newEl = document.createElement('div');

    // const h1 = document.createElement('h1');
    // h1.innerText = xaviData.name;

    // newEl.append(h1);
    // newEl.append(xaviImageTag);

    // newEl.style.textAlign = 'center';

    // document.body.prepend(newEl);
    // -------------- OPTIONAL DEPENDING ON TIME ------------------

    return xaviData;
  });

  console.log(result);

  // Close browser
  // await browser.close();
};

runPuppeteer();
