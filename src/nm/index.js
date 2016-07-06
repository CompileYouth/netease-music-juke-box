import Application from "./app/Application";

$(document).ready(() => {
    const app = new Application("nm-application");
    app.placeAt(document.body);
    app.run();
});
