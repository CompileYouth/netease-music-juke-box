import Application from "./app/Application";

$(document).ready(() => {
    const app = new Application("nm-app");
    app.placeAt(document.body);
    app.run();
});
