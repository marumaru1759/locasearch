import * as pptr from 'puppeteer';

(async () => {
	const browser = await pptr.launch({
		headless: true,
		slowMo: 50,
	});

export const page = await browser.newPage();

})


