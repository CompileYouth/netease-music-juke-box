import View from "../../nju/view/View";

export default class LoadingView extends View {
    init() {
        super.init();
        this.addStyleClass("nm-loading-view");

        this.$element.append(`
            <div class="loading-circle">
                <div class="loading-circle1 loading-child"></div>
                <div class="loading-circle2 loading-child"></div>
                <div class="loading-circle3 loading-child"></div>
                <div class="loading-circle4 loading-child"></div>
                <div class="loading-circle5 loading-child"></div>
                <div class="loading-circle6 loading-child"></div>
                <div class="loading-circle7 loading-child"></div>
                <div class="loading-circle8 loading-child"></div>
                <div class="loading-circle9 loading-child"></div>
                <div class="loading-circle10 loading-child"></div>
                <div class="loading-circle11 loading-child"></div>
                <div class="loading-circle12 loading-child"></div>
            </div>
        `);
    }
}
