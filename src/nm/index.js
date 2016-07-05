import TrackListView from "./view/TrackListView";

$(document).ready(() => {
    console.log("...");
    const trackListView = new TrackListView();
    $(document.body).append(trackListView.$element);
});
