import ListView from "../../nju/view/ListView";

export default class SearchListView extends ListView {
    init() {
        super.init();
        this.addStyleClass("nm-search-list-view");
    }

    activate(items) {
        this.$element.show();
        this.addItems(items);
    }

    deactivate() {
        this.clearItems();
        this.$element.hide();
    }

    renderItem(item, $item) {
        $item.data("item", item);
        $item.attr("id", "i-" + this.getIdOfItem(item));
        $item.text(item.name);
    }
}
