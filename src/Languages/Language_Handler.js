import Cookies from 'universal-cookie';
import en from "../Languages/en.json";
import es from "../Languages/es.json";
import pt from "../Languages/pt.json";

export function getLanguageName() {
    let lang = getLanguage();
    let lang_name;
    if (lang === "en")
        lang_name = "EN";
    else if (lang === "es")
        lang_name = "ES";
    else
        lang_name = "PT";
    return lang_name;
}

export function getLanguage() {
    const cookies = new Cookies();
    let lang = cookies.get('language');
    if (lang === undefined)
        lang = "pt";

    return lang
}

export function setLanguage(lang) {
    const cookies = new Cookies();
    cookies.set('language', lang, { path: '/' });
}

export function translate(name){
    let lang = getLanguage();
    let data;
    if (lang === "en")
        data = JSON.parse(JSON.stringify(en));
    else if(lang === "es")
        data = JSON.parse(JSON.stringify(es));
    else
        data = JSON.parse(JSON.stringify(pt));
    
    let array = name.split(".");

    for (var i = 0; i < array.length; i++) {
        data = data[array[i]];
    }
    return data;
}

export function getClasses() {
    return [
        {
            id: 1,
            name: 'type1',
            seats: 4,
            space: 2,
            air_conditioning : 'ac_m',
            gear: 'gear_m',
            doors: 5,
            fuel: 'gasoline',
            src:require('../RentaCar/cars/pequenos_utilitarios.png')
        },
        {
            id: 2,
            name: 'type2',
            seats: 5,
            space: 2,
            air_conditioning : 'ac_m',
            gear: 'gear_m',
            doors: 5,
            fuel: 'gasoline',
            src:require('../RentaCar/cars/utilitarios.png')
        },
        {
            id: 3,
            name: 'type3',
            seats: 5,
            space: 2,
            air_conditioning : 'ac_ma',
            gear: 'gear_ma',
            doors: 5,
            fuel: 'diesel',
            src:require('../RentaCar/cars/utilitarios_economicos.png')
        },
        {
            id: 4,
            name: 'type4',
            seats: 5,
            space: 3,
            air_conditioning : 'ac_ma',
            gear: 'gear_ma',
            doors: 5,
            fuel: 'diesel',
            src:require('../RentaCar/cars/carrinhas.png')
        },
        {
            id: 5,
            name: 'type5',
            seats: 7,
            space: 4,
            air_conditioning : 'ac_a',
            gear: 'gear_ma',
            doors: 5,
            fuel: 'diesel',
            src:require('../RentaCar/cars/monovolumes.png')
        },
    ]
}