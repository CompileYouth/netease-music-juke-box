import NJUApplicationController from "../../nju/app/ApplicationController";

import Application from "./Application";
import ServiceClient from "../service/ServiceClient";

export default class ApplicationController extends NJUApplicationController {

    init() {
        super.init();
        this._playLists = [];
        this._activePlayList = null;
        this._activeTrack = null;
    }

    get playLists() {
        return this._playLists;
    }
    set playLists(playLists) {
        this._playLists = playLists;
        this._onPlayListsChanged();
    }

    get activePlayList() {
        return this._activePlayList;
    }
    set activePlayList(activePlayList) {
        if (this._activePlayList !== activePlayList) {
            this._activePlayList = activePlayList;
            this._onActivePlayListChanged();
        }
    }

    get activeTrack() {
        return this._activeTrack;
    }
    set activeTrack(activeTrack) {
        if (this._activeTrack !== activeTrack) {
            this._activeTrack = activeTrack;
            this._onActiveTrackChanged();
        }
    }

    createApplication(options) {
        const application = new Application();
        application.playListView.on("selectionchanged", this._playListView_selectionchanged.bind(this));
        application.trackTableView.on("trackchanged", this._trackTableView_selectionchanged.bind(this));
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
        this.playLists = await ServiceClient.getInstance().getUserPlayList();
    }

    _onPlayListsChanged() {
        this.application.playListView.items = this.playLists;
    }

    _onActivePlayListChanged() {
        if (this.activePlayList) {
            this.application.trackTableView.items = this.activePlayList.tracks;
        }
    }

    _onActiveTrackChanged() {
        this.application.trackPlayerView.activeTrack = this.activeTrack;
    }

    async _playListView_selectionchanged(e) {
        const playList = await ServiceClient.getInstance().getPlayListDetail(this.application.playListView.selectedId);
        this.activePlayList = playList;
    }

    _trackTableView_selectionchanged(e) {
        if (e.parameters) {
            this.activeTrack = e.parameters;
        }
    }
}
