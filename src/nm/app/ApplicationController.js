import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application";
import ServiceClient from "../service/ServiceClient";

export default class ApplicationController extends NJUApplicationController {
    createApplication(options) {
        const application = new Application();
        return application;
    }

    async run() {
        console.log("Net Music Webapp is now running...");

        try {
            await ServiceClient.getInstance().login();
            this.application.playListView.items = await ServiceClient.getInstance().getUserPlayLists();
            this.application.playListView.selection = this.application.playListView.items[0];

            const playList = await ServiceClient.getInstance().getPlayListDetail(this.application.playListView.items[0].id);
            this.application.trackTableView.items = playList.tracks;
        }
        catch (e) {
            throw new Error("Can't get data.");
        }
    }
}
