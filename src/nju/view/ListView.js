import View from "./View";

export default class ListView extends View {
    init() {
        super.init();
        this._items = null;
        this._$itemTemplates = [];
        this.addStyleClass("nju-list-view");
    }

    getElementTag() {
        return "ul";
    }

    getItemElementTag() {
        return "li";
    }

    get items() {
        return this._items;
    }

    set items(items) {
        this.clearItems();
        this.addItems(items);
    }

    clearItems() {
        if (this.items !== null && this.items.length > 0) {
            this.$container.children(this.getItemElementTag()).remove();
        }

        this._items = [];
    }

    addItems(items) {
        if (items && items.length) {
            items.forEach((item) => {
                this.addItem(item);
            });
        }
    }

    addItem(item) {
        this._items.push(item);
        const itemType = this.getTypeOfItem();
        const $item = this.$createItem(itemType);
        this.renderItem(item, $item);
        this.$container.append($item);
    }

    getTypeOfItem() {
        return 0;
    }

    $createItem(itemType=0) {
        if (!this._$itemTemplates[itemType]) {
            this._$itemTemplates[itemType] = this.$createNewItem(itemType);
        }

        return this._$itemTemplates[itemType].clone();
    }

    renderItem(item, $item) {

    }

    $createNewItem(itemType=0) {
        return $(`<${this.getItemElementTag()}/>`);
    }
}
