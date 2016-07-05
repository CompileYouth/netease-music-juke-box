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
    }


}
