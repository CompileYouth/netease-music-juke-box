import View from "../../nju/view/View";

export default class TrackPlayerView extends View {
    init() {
        super.init();

        this._activeTrack = null;
        this.addStyleClass("nm-player-view");

        this._initLayout();
    }

    get activeTrack() {
        return this._activeTrack;
    }
    set activeTrack(activeTrack) {
        if (this._activeTrack !== activeTrack) {
            this._activeTrack = activeTrack;
            this.$(".name").text(this._activeTrack.name);
        }
    }

    _initLayout() {
        this.$element.append(`
            <span class="name"></span>
        `);
    }
}
