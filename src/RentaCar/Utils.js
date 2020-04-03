export function getClasses() {
    return [
        {
            id: 1,
            name: 'pequenos utilitários',
            seats: 5,
            space: 2,
            air_conditioning : 'A/C manual',
            gear: 'cx manual',
            doors: 5,
            fuel: 'gasolina',
            src:require('./cars/pequenos_utilitarios.png')
        },
        {
            id: 2,
            name: 'utilitários',
            seats: 5,
            space: 2,
            air_conditioning : 'A/C manual',
            gear: 'cx manual',
            doors: 5,
            fuel: 'gasolina',
            src:require('./cars/utilitarios.png')
        },
        {
            id: 3,
            name: 'utilitários económicos',
            seats: 5,
            space: 2,
            air_conditioning : 'A/C manual',
            gear: 'cx manual/ automático',
            doors: 5,
            fuel: 'diesel',
            src:require('./cars/utilitarios_economicos.png')
        },
        {
            id: 4,
            name: 'carrinhas',
            seats: 5,
            space: 3,
            air_conditioning : 'A/C manual',
            gear: 'cx manual',
            doors: 5,
            fuel: 'diesel',
            src:require('./cars/carrinhas.png')
        },
        {
            id: 5,
            name: 'monovolumes',
            seats: 5,
            space: 4,
            air_conditioning : 'A/C automático',
            gear: 'cx manual',
            doors: 7,
            fuel: 'diesel',
            src:require('./cars/monovolumes.png')
        },
    ]
}

export function createEmail(email, name, car_type, start_date, end_date, message) {
    /*
    let string = "";

    string += "Nome: " + name + "<br/>";
    string += "Email: " + email + "<br/>";
    let car_name;
    switch (car_type) {
        case "1":
            car_name = "Pequeno utilitário";
            break;
        case "2":
            car_name = "Utilitário";
            break;
        case "3":
            car_name = "Utilitário económico";
            break;
        case "4":
            car_name = "Carrinha";
            break;
        case "5":
            car_name = "Monovolume";
            break;
        default:
            break
    }
    string += "Tipo de carro: " + car_name + "<br/>";
    string += "Data: " + start_date + " até " + end_date + "<br/>";
    string += "Mensagem: " + message + "<br/>";

    return string;
     */
    const obj = {};
    obj['name'] = name;
    obj['email'] = email;
    obj['car_type'] = car_type;
    obj['start_date'] = start_date;
    obj['end_date'] = end_date;
    obj['message'] = message;

    return obj;
}

export function getPadding() {
    return '25%';
}

export function getMenuTop() {
    return '60px';
}

export function getSubMenuTop() {
    return '50px';
}

export function getTitleSize() {
    return '64px';
}

export function getIcons(color){
    let size=6;
    let icons_img=[size];
    for (let i=0;i<size;i++){
       icons_img[i]=require('./icons/'+color+'/'+i+'.png');
    }
    return icons_img;
}
//export const blackIcons = [require('./icons/black/1.png'),{src: require('./icons/black/2.png') },{src: require('./icons/black/3.png') }, { src: require('./icons/black/4.png')},{ src: require('./icons/black/5.png') }, { src: require('./icons/black/6.png') }];

//export const whiteIcons = [{src: require('./icons/white/1.png')},{src: require('./icons/white/2.png') },{src: require('./icons/white/3.png') }, { src: require('./icons/white/4.png')},{ src: require('./icons/white/5.png') }, { src: require('./icons/white/6.png' )}];
