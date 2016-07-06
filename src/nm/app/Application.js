import NJUApplication from "../../nju/app/Application.js";

export default class Application extends NJUApplication
{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
    }

    _initLayout() {
        this.$element.append(`
            <header>
                <h1>网易云音乐</h1>
            </header>
            <main>
                <aside></aside>
                <section class="content"></section>
            </main>
            <footer></footer>
        `);
    }

    run()
    {
        console.log("Net Music Webapp is now running...");
    }
}
