import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application";
import ServiceClient from "../service/ServiceClient";

export default class ApplicationController extends NJUApplicationController {

    init() {
        super.init();
        this._playList = [];
        this._selectedPlayList = null;
    }

    get playList() {
        return this._playList;
    }
    set playList(playList) {
        this._playList = playList;
        this._onPlayListChanged();
    }

    get selectedPlayList() {
        return this._selectedPlayList;
    }
    set selectedPlayList(selectedPlayList) {
        if (this._selectedPlayList !== selectedPlayList) {
            this._selectedPlayList = selectedPlayList;
            this._onSelectedPlayListChanged();
        }

    }

    createApplication(options) {
        const application = new Application();
        application.playListView.on("selectionchanged", this._playListView_selectionchanged.bind(this));
        return application;
    }

    async run() {
        console.log("Net Music Webapp is now running...");

        try {
            await ServiceClient.getInstance().login();

            await this._loadUserPlayLists();

        }
        catch (e) {
            throw new Error("Can't get data.");
        }
    }

    async _loadUserPlayLists() {
        this.playList = await ServiceClient.getInstance().getUserPlayList();
    }

    _onPlayListChanged() {
        this.application.playListView.items = this.playList;
    }

    _onSelectedPlayListChanged() {
        if (this.selectedPlayList) {
            this.application.trackTableView.items = this.selectedPlayList.tracks;
        }
    }

    async _playListView_selectionchanged(e) {
        const playList = await ServiceClient.getInstance().getPlayListDetail(this.application.playListView.selectedId);
        this.selectedPlayList = playList;
    }
}
