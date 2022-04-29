import "./styles.scss";

import { Wheelchair } from "../Icons/Wheelchair";
import { Contrast } from "../Icons/Contrast";
import { Diagram } from "../Icons/Diagram";
import { Facebook } from "../Icons/Facebook";
import { Instagram } from "../Icons/Instagram";


export function AccessibilityBar(){
    return (
        <div className="container-accessibility">
            
            <div className="options-acessibility">
                <div>
                    <Wheelchair />
                    <span>Acessibilidade</span>
                </div>
                <div className="contrast">
                    <Contrast />
                    <span>Alto Contraste</span>
                </div>
                <div>
                    <Diagram />
                    <span>Mapa do site</span>
                </div>
            </div>

            <div className="social-icons">
                <Facebook />
                <Instagram />
            </div>
        </div>
    )
}