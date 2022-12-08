const baseUrl = 'https://kievsash.github.io/ghactions-angular-project/';

const scenario = {
    url: () => `${baseUrl}`,
    action: async (page) => {
        await page.click(
            `drb-nested-cards-container drb-shortcut-card:first-child kirby-card`
        );
        // let it render
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 500);
        });
        await page.waitForSelector('kirby-modal-wrapper ion-header ion-buttons button'); // close modal button
        // let it render
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 200);
        });
    },
    back: async (page) => {
        await page.click(
            `kirby-modal-wrapper ion-header ion-buttons button`
        );
        // let it render
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 200);
        });
    },
    repeat: () => 5
};

module.exports = scenario;
