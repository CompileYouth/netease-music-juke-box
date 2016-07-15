import View from "../view/View.js";

export default class Application extends View {
    static _instance = null;

    static getInstance() {
        if (Application._instance === null) {
            Application._instance = new Application();
        }

        return Application._instance;
    }

    init()
    {
        super.init();
        this.addStyleClass("nju-app");
    }
}
