import Panel from "./panel/Panel";
import PlayListView from "./view/PlayListView";

$(document).ready(() => {
    const panel = new Panel("nm-panel");
    panel.title = "Panel-Title";
    const playlistView = new PlayListView("nm-play-list-view");

    panel.addSubview(playlistView);
    $(document.body).append(panel.$element);

    console.log(playlistView.parent, panel.parent);
    //playlistView.removeFromParent();
});
