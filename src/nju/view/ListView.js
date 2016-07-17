import View from "./View";

export default class ListView extends View {
    init() {
        super.init();
        this._items = [];
        this._selection = null;
        this._$itemTemplates = [];
        this.addStyleClass("nju-list-view");

        this._initLayout();

        this.$container.on("click", this.getItemElementTag(), this._onclick.bind(this));
    }

    _initLayout() {

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

    get selection() {
        return this._selection;
    }

    set selection(selection) {
        this.selectItem(selection);
    }

    get selectedId() {
        return this.getIdOfItem(this.selection);
    }
    set selectedId(selectedId=null) {
        const $item = this.$getItem(selectedId);
        if ($item.length > 0) {
            const item = $item.data("item");
            if (item) {
                this.selection = item;
            }
        }
    }

    _onclick(e) {
        const $item = $(e.currentTarget);
        const item = $item.data("item");
        this.selectItem(item);
    }

    clearItems() {
        this.selection = null;
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

    selectItem(item=null) {
        if (this.selection === item) {
            return;
        }

        if (this._selection !== null) {
            this.$getItem(this._selection).removeClass("selected");
            this._selection = null;
        }

        this._selection = item;

        if (this._selection) {
            const $item = this.$getItem(item);
            $item.addClass("selected");

            this.trigger("selectionchanged", item);
        }

    }

    getTypeOfItem() {
        return 0;
    }

    getIdOfItem(item) {
        if (item && item.id) {
            return item.id;
        }
        else {
            return null;
        }
    }

    $createItem(itemType=0) {
        if (!this._$itemTemplates[itemType]) {
            this._$itemTemplates[itemType] = this.$createNewItem(itemType);
        }

        return this._$itemTemplates[itemType].clone();
    }

    renderItem(item, $item) {
        $item.data("item", item);
        $item.attr("id", "i-" + this.getIdOfItem(item));
    }

    $createNewItem(itemType=0) {
        return $(`<${this.getItemElementTag()}/>`);
    }

    $getItem(item) {
        const id = this.getIdOfItem(item);
        return this.$container.children("#i-" + id);
    }
}
