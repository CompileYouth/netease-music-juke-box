import View from "../view/View.js";

export default class Application extends View {
    static _instance = null;
    constructor(...args)
    {
        super(...args);
        if (Application._instance === null)
        {
            Application._instance = this;
        }
        else {
            console.error("Application is a singleton object.");
            throw new Error("Application is a singleton object.");
        }
    }

    static getInstance() {
        if (Application._instance === null) {
            console.error("Application has not been instantiated.");
            throw new Error("Application has not been instantiated.");
        }

        return Application._instance;
    }

    init()
    {
        super.init();
        this.addStyleClass("nju-app");
    }
}
