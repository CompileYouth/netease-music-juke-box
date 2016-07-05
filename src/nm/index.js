import TrackListView from "./view/TrackListView";

$(document).ready(() => {
    console.log("...");
    const trackListView = new TrackListView();
    $(document.body).append(trackListView.$element);

    $.ajax({
        url: "http://music.163.com/api/playlist/detail?id=32994250"
    }).then((res) => {
        trackListView.tracks = res.result.tracks;
    });
});
