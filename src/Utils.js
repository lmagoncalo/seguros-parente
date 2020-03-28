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
            fuel: 'gasolina'
        },
        {
            id: 2,
            name: 'utilitários',
            seats: 5,
            space: 2,
            air_conditioning : 'A/C manual',
            gear: 'cx manual',
            doors: 5,
            fuel: 'gasolina'
        },
        {
            id: 3,
            name: 'utilitários económicos',
            seats: 5,
            space: 2,
            air_conditioning : 'A/C manual',
            gear: 'cx manual',
            doors: 5,
            fuel: 'diesel'
        },
        {
            id: 4,
            name: 'carrinhas',
            seats: 5,
            space: 3,
            air_conditioning : 'A/C manual',
            gear: 'cx manual',
            doors: 5,
            fuel: 'diesel'
        },
        {
            id: 5,
            name: 'monovolumes',
            seats: 'audi',
            space: 4,
            air_conditioning : 'A/C autm',
            gear: 'cx manual',
            doors: 7,
            fuel: 'diesel'
        },
    ]
}

export function createEmail(email, name, car_type, start_date, end_date, message) {
    let string = "";

    string += "Nome: " + name + "\n";
    string += "Email: " + email + "\n";
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
    string += "Tipo de carro: " + car_name + "\n";
    string += "Data: " + start_date + " até " + end_date + "\n";
    string += "Mensagem: " + message + "\n";

    return string;

}