import Application from "./app/Application";
import ServiceClient from "./service/ServiceClient";

$(document).ready(() => {
    const app = new Application("nm-app");
    app.placeAt(document.body);
    app.run();
});
