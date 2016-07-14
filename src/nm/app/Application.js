import NJUApplication from "../../nju/app/Application.js";

import PlayListView from "../view/PlayListView";
import TrackTableView from "../view/TrackTableView";
import TrackPlayerView from "../view/TrackPlayerView";

export default class Application extends NJUApplication {
    init() {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this._initPlayListView();
        this._initTrackTableView();
        this._initTrackPlayerView();
    }

    _initLayout() {
        this.$element.append(`
            <header>
                <h1>网易云音乐</h1>
            </header>
            <main>
                <aside class="sidebar"></aside>
                <section class="content"></section>
            </main>
            <footer></footer>
        `);
    }

    _initPlayListView() {
        this.playListView = new PlayListView("nm-play-list");
        this.addSubview(this.playListView, this.$("> main > aside.sidebar"));
    }

    _initTrackTableView() {
        this.trackTableView = new TrackTableView("nm-track-table");
        this.addSubview(this.trackTableView, this.$("> main > section.content"));
    }

    _initTrackPlayerView() {
        this.trackPlayerView = new TrackPlayerView();
        this.addSubview(this.trackPlayerView, this.$("> footer"));
    }
}
