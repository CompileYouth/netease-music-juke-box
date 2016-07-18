import Application from "./Application";
import ViewController from "../view/ViewController";

export default class ApplicationController extends ViewController {
    static _instance = null;
    constructor(...args)
    {
        super(...args);
        if (ApplicationController._instance === null)
        {
            ApplicationController._instance = this;
        }
        else {
            console.error("Application is a singleton object.");
            throw new Error("Application is a singleton object.");
        }
    }

    static getInstance() {
        if (ApplicationController._instance === null) {
            console.error("ApplicationController has not been instantiated.");
            throw new Error("ApplicationController has not been instantiated.");
        }

        return ApplicationController._instance;
    }

    get application() {
        return this.view;
    }

    createView(options={}) {
        return this.createApplication(options);
    }

    createApplication(options={}) {
        throw new Error("createApplication(options) must be overide in the derived class.");
    }

    run() {

    }
}
