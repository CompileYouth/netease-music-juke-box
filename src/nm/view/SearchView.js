import View from "../../nju/view/View";

export default class SearchView extends View {
    init() {
        super.init();
        this.addStyleClass("nm-search-view");

        this._initLayout();
        this.$container.on("keydown", this._onkeydown.bind(this));
        this.$container.on("click", "span.icon", this._iconclick.bind(this));
        this.$container.find("input").on("input", this._oninput.bind(this));
    }

    _initLayout() {
        this.$element.append(`
            <span class="icon iconfont icon-search"></span>
            <input type="search" placeholder="搜索音乐">
        `);
    }

    get text() {
        return this.$("input[type=search]").val();
    }
    set text(text) {
        this.$("input[type=search]").val(typeof text === "string" ? text : "");
    }

    // if final === true, show final result
    search(final=true, text=this.text) {
        this.text = text;
        if (text !== "") {
            this.trigger("search", {
                text: this.text,
                final
            });
        }
    }

    _onkeydown(e) {
        if (e.keyCode === 13) {
            this.search();
        }
    }

    _iconclick(e) {
        console.log("icon click");
    }

    _oninput(e) {
        this.search(false);
    }

}
