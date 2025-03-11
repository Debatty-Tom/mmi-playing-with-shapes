import {settings} from "./settings";
import {shapes} from "./shapes/shapes";

export const crazyShapes = {
    speed: 2, // Vitesse de défilement
    offsetX: 0, // Position horizontale des formes

    init() {
        this.canvasElement = document.getElementById('shapes') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.selectedShapes = [];
        this.randomizeShapes();
        this.animate();
    },
    animate() {
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height); // Nettoyage
        this.drawCrazyShapes(); // Dessiner

        // Déplacer toutes les formes vers la gauche
        for (let shape of this.selectedShapes) {
            shape.x -= this.speed;
        }

        // Vérifier si la première forme est sortie du cadre
        if (this.selectedShapes.length > 0 && this.selectedShapes[0].x < -settings.crazyShapes.rectangle.width) {
            this.selectedShapes.shift(); // Supprimer la première
            this.selectedShapes.push(this.createRandomShape(this.selectedShapes.length)); // Ajouter une nouvelle à la fin
        }

        requestAnimationFrame(() => this.animate()); // Boucle d'animation
    },
    drawCross(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number, fill: boolean = true, stroke: number = 2) {
        shapes.drawRectangle(ctx, x, y, width, height, color, true, stroke);
        shapes.drawRectangle(ctx, x, y, width, height, color, true, stroke, 90);
    },
    drawBackground() {
        shapes.drawRectangle(
            this.ctx,
            this.canvasElement.width / 2,
            this.canvasElement.height / 2,
            this.canvasElement.width,
            this.canvasElement.height,
            settings.crazyShapes.backgroundColor
        );
    },
    drawCrazyShapes() {
        this.drawBackground();
        for (let shape of this.selectedShapes) {
            switch (shape.type) {
                case 'FilledRectangle':
                    shapes.drawRectangle(this.ctx, shape.x, this.canvasElement.height / 2, shape.width, shape.height, shape.color, true);
                    break;
                case 'StrokedRectangle':
                    shapes.drawRectangle(this.ctx, shape.x, this.canvasElement.height / 2, shape.width, shape.height, shape.color, false, settings.crazyShapes.rectangle.rotation, shape.lineWidth);
                    break;
                case 'Circle':
                    shapes.drawCircle(this.ctx, shape.x, this.canvasElement.height / 2, shape.radius, shape.color);
                    break;
                case 'StrokedCircle':
                    shapes.drawCircle(this.ctx, shape.x, this.canvasElement.height / 2, shape.radius, shape.color, false, shape.lineWidth);
                    break;
                case 'Triangle':
                    shapes.drawTriangle(this.ctx, shape.x, this.canvasElement.height / 2, shape.width, shape.height, shape.color);
                    break;
                case 'StrokedTriangle':
                    shapes.drawTriangle(this.ctx, shape.x, this.canvasElement.height / 2, shape.width, shape.height, shape.color, false, shape.lineWidth);
                    break;
            }
        }
    },
    randomizeShapes() {
        this.selectedShapes = [];
        for (let i = 0; i < 10; i++) {
            this.selectedShapes.push(this.createRandomShape(i));
        }
    },

    createRandomShape(index: number) {
        let shape = { ...shapesTypes[this.random(0, shapesTypes.length)] }; // Clone pour éviter les références globales
        shape.color = settings.crazyShapes.shapesBackgroundColors[this.randomColors()];
        shape.x = (this.canvasElement.width / 8) * (index) + this.offsetX; // Position initiale
        return shape;
    },
    randomColors() {
        return Math.floor(Math.random() * settings.crazyShapes.shapesBackgroundColors.length);
    },
    random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
type Shape =
    | { type: "FilledRectangle"; x:number; width: number; height: number; color: string }
    | { type: "StrokedRectangle"; x:number; width: number; height: number; lineWidth: number; color: string }
    | { type: "Circle"; x:number; radius: number; color: string }
    | { type: "StrokedCircle"; x:number; radius: number; lineWidth: number; color: string }
    | { type: "Triangle"; x:number; width: number; height: number; color: string }
    | { type: "StrokedTriangle"; x:number; width: number; height: number; lineWidth: number; color: string };

const shapesTypes: Shape[] = [
    {
        type: "FilledRectangle", x:0,
        width: settings.crazyShapes.rectangle.width,
        height: settings.crazyShapes.rectangle.height,
        color: settings.crazyShapes.shapesBackgroundColors[1]
    },
    {
        type: "StrokedRectangle", x:0,
        width: settings.crazyShapes.rectangle.width,
        height: settings.crazyShapes.rectangle.height,
        lineWidth: settings.crazyShapes.rectangle.lineWidth,
        color: settings.crazyShapes.shapesBackgroundColors[2]
    },
    {
        type: "Circle", x:0, radius: settings.crazyShapes.circle.radius,
        color: settings.crazyShapes.shapesBackgroundColors[0]
    },
    {
        type: "StrokedCircle", x:0,
        radius: settings.crazyShapes.circle.radius,
        lineWidth: settings.crazyShapes.circle.lineWidth,
        color: settings.crazyShapes.shapesBackgroundColors[1]
    },
    {
        type: "Triangle", x:0, width: settings.crazyShapes.triangle.width, height: settings.crazyShapes.triangle.height,
        color: settings.crazyShapes.shapesBackgroundColors[2]
    },
    {
        type: "StrokedTriangle", x:0,
        width: settings.crazyShapes.triangle.width,
        height: settings.crazyShapes.triangle.height,
        lineWidth: settings.crazyShapes.triangle.lineWidth,
        color: settings.crazyShapes.shapesBackgroundColors[0]
    },
];