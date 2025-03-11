import {swissFlag} from "./swiss_flag";
import {crazyShapes} from "./crazy_shapes";
import {masterCard} from "./master_card";
import {theEye} from "./the_eye";


(
    function () {
        const app = {
            init() {
                swissFlag.init();
                masterCard.init();
                theEye.init();
                crazyShapes.init();
            },
        }
        app.init();
    }
)()