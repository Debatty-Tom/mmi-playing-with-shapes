import {shapes} from "./shapes/shapes";
import {settings} from "./settings";

export const masterCard = {
    init() {
        this.canvasElement = document.getElementById('master-card') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.drawMasterCard();
    },
    drawMasterCard() {
        shapes.drawRectangle(
            this.ctx,
            this.canvasElement.width / 2,
            this.canvasElement.height / 2,
            this.canvasElement.width,
            this.canvasElement.height,
            settings.masterCard.backgroundColor,

        );
        shapes.drawCircle(
            this.ctx,
            this.canvasElement.width / 2.5,
            this.canvasElement.height / 2.5,
            settings.masterCard.leftCircle.radius,
            settings.masterCard.leftCircle.backgroundColor
        );
        shapes.drawCircle(
            this.ctx,
            this.canvasElement.width / 2.5 * 1.5,
            this.canvasElement.height / 2.5,
            settings.masterCard.rightCircle.radius,
            settings.masterCard.rightCircle.backgroundColor
        );
        shapes.drawEllipse(
            this.ctx,
            this.canvasElement,
            0,
            -this.canvasElement.height / 10,
            settings.masterCard.ellipse.radiusX,
            settings.masterCard.ellipse.radiusY,
            settings.masterCard.ellipse.backgroundColor
        );

        this.ctx.fillStyle = settings.masterCard.text.color;
        this.ctx.beginPath();
        this.ctx.translate(this.canvasElement.width / 2, this.canvasElement.height / 4 * 3.5);
        this.ctx.font = settings.masterCard.text.font;
        this.ctx.textAlign = settings.masterCard.text.textAlign;
        this.ctx.textBaseline = settings.masterCard.text.textBaseline;
        this.ctx.fillText('mastercard', 0, 0);
        this.ctx.closePath();
    },
}