import ManagedObject from "../base/ManagedObject";

export default class View extends ManagedObject {

    constructor(id, controller=null) {
        super(id);
        this._controller = controller;
    }

    init() {
        super.init();
        this._subviews = [];
        this.$element = $(`<${this.getElementTag()}/>`);
        if (this.id !== null) {
            this.$element.attr("id", this.id);
        }
        this.$container = this.$element;
    }

    getElementTag() {
        return "div"
    }

    get controller() {
        return this._controller;
    }

    $(...args) {
        return this.$element.find(...args);
    }

    addStyleClass(...args) {
        this.$element.addClass(...args);
    }

    removeStyleClass(...args) {
        this.$element.removeClass(...args);
    }

    toggleStyleClass(...args) {
        this.$element.toggleClass(...args);
    }

    get subviews() {
        return this._subviews;
    }

    addSubview(view, $target = this.$container) {
        if (view instanceof View) {
            if (view.parent) {
                view.removeFromParent();
            }

            view._parent = this;
            this._subviews.push(view);
            view.placeAt($target);
        }
    }

    addSubviews(views, $target = this.$container) {
        if (Array.isArray(views)) {
            views.forEach((view) => {
                this.addSubview(view, $target);
            });
        }
    }

    removeSubview(view, neverUseAgain = false) {
        if (view instanceof View && this._subviews.indexOf(view) > -1) {
            this._subviews.splice(this._subviews.indexOf(view));
            view._parent = null;
             if (neverUseAgain) {
                 view.$element.remove();
             }
             else {
                 view.$element.detach();
             }
        }
    }

    removeFromParent() {
        if (this.parent) {
            this.parent.removeSubview(this);
        }
    }

    removeAllSubviews(neverUseAgain = false) {
        while (this._subviews.length > 0) {
            this.removeSubview(this._subviews[0], neverUseAgain);
        }
    }

    placeAt(target) {
        const $target = (target instanceof jQuery ? target : $(target));
        $target.append(this.$element);
    }
}
