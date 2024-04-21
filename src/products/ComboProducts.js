import combo from '../assets/images/combo.png'
import pizzas from '../assets/images/two pizzas.png'
import combotwo from '../assets/images/combo in combo.png'
import news from '../assets/images/new.png'

export const ComboProducts = [
    {   
        id: 1,
        img: combo,
        icon: news, 
        name: 'Комбо микс',
        filling: 'Пицца Баварская; Сет Фирменный;',
        price_was: '1 499 ₽',
        became: 1319,
        count: 1,
        mass_two: '130 Ккал'
    },
    {
        id: 2,
        img: pizzas,
        name: 'Дабл пицца',
        filling: 'Пицца Баварская; Пицца 4 Сыра; Coca-Cola (1 л)',
        price_was: '999 ₽',
        became: 899,
        count: 1,
        mass_two: '130 Ккал'
    },
    {
        id: 3,
        img: combotwo,
        name: 'Комбо Small party',
        filling: 'Пицца Неаполитано; Пицца Царская; Сет Суши шок;',
        price_was: '2 111 ₽',
        became: 1799,
        count: 1,
        mass_two: '130 Ккал'
    }
]