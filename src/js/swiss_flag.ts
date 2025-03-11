import {shapes} from "./shapes/shapes";
import {settings} from "./settings";

export const swissFlag = {
    init() {
        this.canvasElement = document.getElementById('Swiss-flag') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.drawSwissFlag();
    },
    drawSwissFlag() {
        shapes.drawRectangle(
            this.ctx, this.canvasElement.width / 2, this.canvasElement.height / 2, this.canvasElement.width, this.canvasElement.height, settings.swissFlag.backgroundColor
        );
        shapes.drawRectangle(
            this.ctx,
            this.canvasElement.width / 2,
            this.canvasElement.height / 2,
            settings.swissFlag.rectangle.width,
            settings.swissFlag.rectangle.height,
            settings.swissFlag.rectangle.backgroundColor
        );
        shapes.drawRectangle(
            this.ctx,
            this.canvasElement.width / 2,
            this.canvasElement.height / 2,
            settings.swissFlag.rectangle.width,
            settings.swissFlag.rectangle.height,
            settings.swissFlag.rectangle.backgroundColor,
            true,
            90
        );
    },
}