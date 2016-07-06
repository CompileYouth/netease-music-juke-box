import Application from "./app/Application";
import ServiceClient from "./service/ServiceClient";

$(document).ready(() => {
    ServiceClient.getInstance().getUserPlayLists().then(playlists => {
        console.log(playlists);
    });

    const app = new Application("nm-app");
    app.placeAt(document.body);
    app.run();
});
