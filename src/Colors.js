export function getPrimaryColor(){
    return "89,127,251";//AZUL
    //return "255,65,99";//ROSA
}
export function getPrimaryColorFinal(){
    return "rgb("+getPrimaryColor()+")";
}

export function getMenuColor(){
    return "255,65,99";//ROSA
}

export function finalColor(color,opacity) {
    return "rgba("+color+",opacity)";
}

export function getTextColor(){
    return "#000000"
}
