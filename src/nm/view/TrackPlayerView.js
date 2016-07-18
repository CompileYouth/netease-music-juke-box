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
            //this.$(".name").text(this._activeTrack.name);
        }
    }

    _initLayout() {
        this.$element.append(`
            <div class="buttons">
                <div class="prevBtn"><i class="iconfont icon-previous h2"></i></div>
                <div class="playBtn">
                    <i class="iconfont icon-play h1"></i>
                    <i class="iconfont icon-pause h1"></i>
                </div>
                <div class="nextBtn"><i class="iconfont icon-0282next h2"></i></div>
            </div>
            <div class="progress">
                <span class="curTime">00:00</span>
                <div class="progress-bar">
                    <div class="bar-bg"></div>
                    <div class="cur-bg"></div>
                    <div class="dot"></div>
                </div>
                <span class="totalTime">03:56</span>
            </div>
        `);
    }
}
