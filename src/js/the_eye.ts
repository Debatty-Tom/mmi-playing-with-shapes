import {shapes} from "./shapes/shapes";
import {settings} from "./settings";

export const theEye = {
    init() {
        this.canvasElement = document.getElementById('triangle') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');

        this.drawTheEye();
    },
    drawTheEye() {
        shapes.drawRectangle(
            this.ctx,
            this.canvasElement.width / 2,
            this.canvasElement.height / 2,
            this.canvasElement.width,
            this.canvasElement.height,
            settings.theEye.backgroundColor
        );
        shapes.drawTriangle(
            this.ctx,
            this.canvasElement.width / 2,
            this.canvasElement.height / 2,
            settings.theEye.triangle.width,
            settings.theEye.triangle.height,
            settings.theEye.triangle.backgroundColor
        );
        shapes.drawCircle(
            this.ctx,
            this.canvasElement.width / 2,
            this.canvasElement.height / 2,
            settings.theEye.bigCircle.radius,
            settings.theEye.bigCircle.backgroundColor
        );
        shapes.drawCircle(
            this.ctx,
            this.canvasElement.width / 2 + settings.theEye.bigCircle.radius / 20,
            this.canvasElement.height / 2,
            settings.theEye.smallCircle.radius,
            settings.theEye.smallCircle.backgroundColor
        );
    }
}