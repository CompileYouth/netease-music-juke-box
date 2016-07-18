import ListView from "../../nju/view/ListView";

export default class PlayListView extends ListView {
    init() {
        super.init();
        this.addStyleClass("nm-play-list-view");
        this.$container.perfectScrollbar();
    }

    $createNewItem() {
        const $li = super.$createNewItem();
        $li.append(`
            <span class="icon iconfont icon-music"></span>
            <span class="text"></span>
        `);

        return $li;
    }

    renderItem(item, $item) {
        super.renderItem(item, $item);
        $item.children(".text").text(item.name);
    }
}
