import TableView from "../../nju/view/TableView";
import TimeUtil from "../util/TimeUtil";

export default class TrackTableView extends TableView {
    init() {
        super.init();
        this.addStyleClass("nm-track-table-view");
        this.$container.on("dblclick", this.getItemElementTag(), this._ondblclick.bind(this));
    }

    $createHeadItem() {
        const $headItem = super.$createHeadItem();
        $headItem.append(`
            <th class="name"></th>
            <th class="artists"></th>
            <th class="album"></th>
            <th class="time"></th>
        `);

        return $headItem;
    }

    renderHeadItem($headItem) {
        super.renderHeadItem($headItem);
        $headItem.children(".name").text("歌曲");
        $headItem.children(".artists").text("歌手");
        $headItem.children(".album").text("专辑");
        $headItem.children(".time").text("时长");
    }

    $createNewItem() {
        const $item = super.$createNewItem();
        $item.append(`
            <td class="name"></td>
            <td class="artists"></td>
            <td class="album"></td>
            <td class="time"></td>
        `);

        return $item;
    }

    renderItem(item, $item) {
        super.renderItem(item, $item);
        $item.children(".name").text(item.name);
        $item.children(".artists").text(item.artists.map(val => val.name).join(", "));
        $item.children(".album").text(item.album.name);
        let duration = 0;
        if (item.lMusic.playTime) {
            duration = item.lMusic.playTime;
        }
        else {
            duration = item.duration;
        }
        $item.children(".time").text(TimeUtil.formatTime(duration));
    }

    _ondblclick() {
        this.trigger("trackchanged", this.selection);
    }
}
