import View from "../view/View.js";

window.APP = null;

export default class Application extends View
{
    constructor(...args)
    {
        super(...args);
        if (window.APP === null)
        {
            window.APP = this;
        }
        else {
            throw new Error("Application is a singleton object.");
        }
    }

    init()
    {
        super.init();
        this.addStyleClass("nju-app");
    }

    run()
    {

    }
}
