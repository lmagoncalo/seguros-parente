export function getPrimaryColor(){
   // return "89,127,251";//AZUL
    return "255,65,99";//ROSA
   // return "255,255,255";
}
export function getPrimaryColorFinal(){
    return "rgb("+getPrimaryColor()+")";
}

export function getMenuColor(){
   // return "255,255,255";
    return "255,65,99";//ROSA
    //return getPrimaryColor;
}

export function finalColor(color,opacity) {
    return "rgba("+color+",opacity)";
}

export function getTextColor(){
    return "#000000"
}

const Colors={
    primaryColor: finalColor(getPrimaryColor,1),
    menuColor: finalColor(getMenuColor,1),
};
