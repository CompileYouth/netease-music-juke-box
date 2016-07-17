import View from "../../nju/view/View";

export default class SearchView extends View {
    init() {
        super.init();
        this.addStyleClass("nm-search-view");

        this._initLayout();
        this.$container.on("keydown", this._onkeydown.bind(this));
        this.$container.on("click", "span.search-icon", this._searchiconclick.bind(this));
        this.$container.on("click", "span.delete-icon", this._deleteiconclick.bind(this));

        this.inputTimer = null;
        this.$container.find("input").on("input", this._oninput.bind(this));
    }

    _initLayout() {
        this.$element.append(`
            <span class="icon search-icon iconfont icon-search"></span>
            <input type="search" placeholder="搜索音乐">
            <span class="icon delete-icon iconfont icon-delete h3"></span>
        `);
    }

    get text() {
        return this.$("input[type=search]").val();
    }
    set text(text) {
        this.$("input[type=search]").val(typeof text === "string" ? text : "");
    }

    search(text=this.text) {
        this.text = text;
        if (text !== "") {
            this.trigger("search", {
                text: this.text
            });
        }
    }

    _onkeydown(e) {
        if (e.keyCode === 13) {
            this.search();
        }
    }

    _searchiconclick(e) {
        this.search();
    }

    _deleteiconclick(e) {
        this.text = "";
    }

    _oninput(e) {
        if (this.inputTimer) {
            window.clearTimeout(this.inputTimer);
            this.inputTimer = null;
        }

        this.inputTimer = window.setTimeout(() => {
            this.trigger("searchchanged", {
                text: this.text
            });
        }, 300);
    }

}
