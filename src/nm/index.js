import ApplicationController from "./app/ApplicationController";

$(document).ready(() => {
    const appController = new ApplicationController("nm-app");
    appController.view.placeAt(document.body);
    appController.run();
});
