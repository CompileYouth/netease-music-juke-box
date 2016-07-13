import TableView from "../../nju/view/TableView";

export default class TrackTableView extends TableView {
    init() {
        super.init();
        this.addStyleClass("nm-track-table-view");
    }

    $createHeadItem() {
        const $headItem = super.$createHeadItem();
        $headItem.append(`
            <th class="name"></th>
            <th class="artists"></th>
            <th class="album"></th>
        `);

        return $headItem;
    }

    renderHeadItem($headItem) {
        super.renderHeadItem($headItem);
        $headItem.children(".name").text("歌曲");
        $headItem.children(".artists").text("歌手");
        $headItem.children(".album").text("专辑");
    }

    $createNewItem() {
        const $item = super.$createNewItem();
        $item.append(`
            <td class="name"></td>
            <td class="artists"></td>
            <td class="album"></td>
        `);

        return $item;
    }

    renderItem(item, $item) {
        super.renderItem(item, $item);
        $item.children(".name").text(item.name);
        $item.children(".artists").text(item.artists.map(val => val.name).join(", "));
        $item.children(".album").text(item.album.name);
    }
}