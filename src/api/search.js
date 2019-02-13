import * as pptr from './puppeteer'


export default {
	google: () => {
		return new Promise(function (resolve, reject){
			await pptr.page.goto('https://www.google.co.jp/');
			const title = await page.querySelector('title');
			.catch(function(error){
				reject("error")
			}).then(function(){
				resolve(title.getProperty('textContent');	
			})
		})
	},

}
	




