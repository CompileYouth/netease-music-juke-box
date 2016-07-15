import NJUApplication from "../../nju/app/Application.js";

import PlayListView from "../view/PlayListView";
import SearchView from "../view/SearchView";
import SearchListView from "../view/SearchListView";
import TrackTableView from "../view/TrackTableView";
import TrackPlayerView from "../view/TrackPlayerView";

export default class Application extends NJUApplication {
    init() {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this._initPlayListView();
        this._initSearchView();
        this._initSearchListView();
        this._initTrackPlayerView();
        this._initTrackTableView();
    }

    _initLayout() {
        this.$element.append(`
            <header>
                <span class="logo iconfont icon-netease-music"></span>
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

    _initSearchView() {
        this.searchView = new SearchView("nm-search-view");
        this.addSubview(this.searchView, this.$("> header"));
    }

    _initSearchListView() {
        this.searchListView = new SearchListView("nm-search-list-view");
        this.addSubview(this.searchListView, this.$("> header"));
    }

    _initTrackPlayerView() {
        this.trackPlayerView = new TrackPlayerView();
        this.addSubview(this.trackPlayerView, this.$("> footer"));
    }

    _initTrackTableView() {
        this.trackTableView = new TrackTableView("nm-track-table");
        this.addSubview(this.trackTableView, this.$("> main > section.content"));
    }
}
