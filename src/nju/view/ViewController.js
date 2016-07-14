import ManagedObject from "../base/ManagedObject";
import View from "../view/View";

export default class ViewController extends ManagedObject {
    constructor(id, options={}) {
        super(id);
        this._view = this.createView(options);
        this.applyViewOptions(options);
    }

    createView(options) {
        return new View(options);
    }

    applyViewOptions(options) {
        for (let key in options) {
            this.view[key] = options[key];
        }
    }

    get view() {
        return this._view;
    }
}
