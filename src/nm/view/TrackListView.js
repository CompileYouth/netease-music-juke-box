export default class TrackListView {
    constructor() {
        this._tracks = [];
        this.$element = $(`<ul/>`);
        this.$element.addClass("nm-track-list-view");
    }

    get tracks() {
        return this._tracks;
    }

    set tracks(tracks) {
        this._tracks = tracks;
        this._clearTrackList();
        this._addAllTracks(this._tracks);
    }

    _clearTrackList() {
        this.$element.children("li").remove();
    }

    _addAllTracks(tracks) {
        if (Array.isArray(tracks)) {
            tracks.forEach((track) => {
                const $li = $(`
                    <li class="track">
                        <a href="${track.mp3Url}">${track.name}</a>
                    </li>
                    `);
                this.$element.append($li);
            });
        }
    }



}
