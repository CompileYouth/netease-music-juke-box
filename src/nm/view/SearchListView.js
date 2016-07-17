import ListView from "../../nju/view/ListView";

export default class SearchListView extends ListView {
    init() {
        super.init();
        this.addStyleClass("nm-search-list-view");

        this.$container.on("mousedown", this.getItemElementTag(), this._onclick.bind(this));
    }

    renderItem(item, $item) {
        $item.data("item", item);
        $item.attr("id", "i-" + this.getIdOfItem(item));
        $item.text(item.name);
    }

    _onclick(e) {
        const itemName = $(e.currentTarget).text();
        this.trigger("itemclick", {
            itemName
        });
    }
}
