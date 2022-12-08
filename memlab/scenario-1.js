
const baseUrl = 'http://localhost:4200/ghactions-angular-project/home';
// const baseUrl = 'https://kievsash.github.io/ghactions-angular-project/';

const scenario = {
    url: () => `${baseUrl}`,
    action: async (page) => {
        await page.click('#leaked');
        // let it render
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 100);
        });
        await page.waitForSelector('.leaked-wrapper');
        // let it render
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 200);
        });
    },
    back: async (page) => {
      await page.click('#home');
        // let it render
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 200);
        });
    },
    repeat: () => 3
};

module.exports = {scenario};
