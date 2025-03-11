export const shapes = {
    drawRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string = '', fill:boolean = true,rotate: number = 0, lineWidth : number = 0, strokeColor : string = '') {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        if (fill) {
            ctx.fillStyle = color;
        }

        if (rotate != 0) {
            ctx.translate(x, y);
            ctx.rotate((Math.PI / 180) * rotate);
            if (fill) {
                ctx.fillRect(-width / 2, -height / 2, width, height);
            }
            ctx.strokeRect(-width / 2, -height / 2, width, height);
        } else {
            if (fill) {
                ctx.fillRect(x - width / 2, y - height / 2, width, height);
            }
            ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        }
        ctx.restore();
    },
    drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string = '', fill:boolean = true, lineWidth : number = 0, strokeColor : string = '') {
        ctx.beginPath();
        ctx.arc(x, y, radius / 2, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.closePath()
        ctx.stroke();
        if (fill) {
            ctx.fillStyle = color;
            ctx.fill();
        }
    },
    drawTriangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string = '', fill:boolean = true, lineWidth : number = 0, strokeColor : string = '') {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(x - width / 2, y + height / 2);
        ctx.lineTo(x, y - height / 2)
        ctx.lineTo(x + width / 2, y + height / 2)
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        ctx.stroke();
    },
    drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, lineWidth : number = 0, strokeColor : string = '') {
        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeColor;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    },
    drawEllipse(ctx: CanvasRenderingContext2D, canvasElement : HTMLCanvasElement, x: number, y: number, radiusX: number, radiusY: number, color: string = '', lineWidth : number = 0, strokeColor : string = '', rotation : number = 0) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeColor;
        ctx.beginPath();
        ctx.translate(canvasElement.width / 2, canvasElement.height / 2);
        ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    },

}