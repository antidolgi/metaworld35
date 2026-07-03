const siteData = {
    zones: [
        {
            id: 'pc-standard',
            name: 'PC STANDARD',
            icon: '🖥️',
            specs: '2060 / 3070, 280/165 Hz, 27", TUF периферия',
            description: 'Идеально для комфортной игры. Топовое железо по доступной цене.',
            image: 'assets/images/zones/standard-hall.jpg'
        },
        {
            id: 'pc-vip',
            name: 'PC VIP',
            icon: '🎮',
            specs: '4070S, 2K, 260 Hz, 27", ROG периферия',
            description: 'Премиум уровень для тех, кто ценит максимальный комфорт и производительность.',
            image: 'assets/images/zones/vip-hall.jpg'
        },
        {
            id: 'pc-bootcamp',
            name: 'PC BOOTCAMP',
            icon: '⚡',
            specs: '5070TI, 4K, 360 Hz, 26.5", PREMIUM периферия',
            description: 'Максимальная мощь для киберспортсменов. Только топовое железо.',
            image: 'assets/images/zones/bootcamp-hall.jpg'
        },
        {
            id: 'ps5',
            name: 'PLAYSTATION 5',
            icon: '🎯',
            specs: 'PS5, 2 джойстика, TV 55"',
            description: 'Консольный гейминг в компании друзей. Уютная атмосфера.',
            image: 'assets/images/zones/ps5-zone.jpg'
        },
        {
            id: 'duo',
            name: 'DUO ЗАЛ',
            icon: '👥',
            specs: '2 места, для друзей',
            description: 'Играйте вдвоем в отдельной комнате. Никаких посторонних.',
            image: 'assets/images/zones/duo-hall.jpg'
        },
        {
            id: 'trio',
            name: 'TRIO ЗАЛ',
            icon: '👨‍👨‍',
            specs: '3 места, команда',
            description: 'Собирай команду из трех человек и доминируйте вместе.',
            image: 'assets/images/zones/trio-hall.jpg'
        },
        {
            id: 'solo',
            name: 'SOLO ЗАЛ',
            icon: '👤',
            name: 'SOLO ЗАЛ',
            icon: '👤',
            specs: '1 место, для одиночной игры',
            description: 'Приватное пространство для максимальной концентрации.',
            image: 'assets/images/zones/solo-hall.jpg'
        }
    ],
    
    prices: {
        morning: [
            { zone: 'PC Standard', hours: '1 час', price: 130 },
            { zone: 'PC Standard', hours: '3 часа', price: 360 },
            { zone: 'PC Standard', hours: '5 часов', price: 550 },
            { zone: 'PC Standard', hours: '12 часов', price: 1250 },
            { zone: 'PC Standard', hours: 'Ночь', price: 600 },
            
            { zone: 'PC VIP', hours: '1 час', price: 170 },
            { zone: 'PC VIP', hours: '3 часа', price: 460 },
            { zone: 'PC VIP', hours: '5 часов', price: 700 },
            { zone: 'PC VIP', hours: '12 часов', price: 1700 },
            { zone: 'PC VIP', hours: 'Ночь', price: 920 },
            
            { zone: 'PC Bootcamp', hours: '1 час', price: 180 },
            { zone: 'PC Bootcamp', hours: '3 часа', price: 490 },
            { zone: 'PC Bootcamp', hours: '5 часов', price: 740 },
            { zone: 'PC Bootcamp', hours: '12 часов', price: 1700 },
            { zone: 'PC Bootcamp', hours: 'Ночь', price: 970 },
            
            { zone: 'PlayStation 5', hours: '1 час', price: 300 },
            { zone: 'PlayStation 5', hours: '3 часа', price: 600 },
            { zone: 'PlayStation 5', hours: '5 часов', price: 1000 },
            { zone: 'PlayStation 5', hours: '12 часов', price: 2400 },
            { zone: 'PlayStation 5', hours: 'Ночь', price: 1200 },
            
            { zone: 'DUO', hours: '1 час', price: 250 },
            { zone: 'DUO', hours: '3 часа', price: 675 },
            { zone: 'DUO', hours: '5 часов', price: 950 },
            { zone: 'DUO', hours: 'Ночь', price: 1500 },
            
            { zone: 'TRIO', hours: '1 час', price: 230 },
            { zone: 'TRIO', hours: '3 часа', price: 630 },
            { zone: 'TRIO', hours: '5 часов', price: 850 },
            { zone: 'TRIO', hours: 'Ночь', price: 1200 },
            
            { zone: 'SOLO', hours: '1 час', price: 280 },
            { zone: 'SOLO', hours: '3 часа', price: 756 },
            { zone: 'SOLO', hours: '5 часов', price: 1060 },
            { zone: 'SOLO', hours: 'Ночь', price: 1600 }
        ],
        day: [
            // Day prices (similar structure, different values)
            { zone: 'PC Standard', hours: '1 час', price: 150 },
            { zone: 'PC Standard', hours: '3 часа', price: 400 },
            { zone: 'PC Standard', hours: '5 часов', price: 600 },
            { zone: 'PC VIP', hours: '1 час', price: 200 },
            { zone: 'PC VIP', hours: '3 часа', price: 500 },
            { zone: 'PC VIP', hours: '5 часов', price: 750 },
            { zone: 'PlayStation 5', hours: '1 час', price: 350 },
            { zone: 'PlayStation 5', hours: '3 часа', price: 700 },
            { zone: 'PlayStation 5', hours: '5 часов', price: 1100 }
        ],
        evening: [
            // Evening prices
            { zone: 'PC Standard', hours: '1 час', price: 200 },
            { zone: 'PC Standard', hours: '3 часа', price: 550 },
            { zone: 'PC Standard', hours: '5 часов', price: 800 },
            { zone: 'PC VIP', hours: '1 час', price: 250 },
            { zone: 'PC VIP', hours: '3 часа', price: 650 },
            { zone: 'PC VIP', hours: '5 часов', price: 950 },
            { zone: 'PlayStation 5', hours: '1 час', price: 400 },
            { zone: 'PlayStation 5', hours: '3 часа', price: 900 },
            { zone: 'PlayStation 5', hours: '5 часов', price: 1300 }
        ],
        night: [
            // Night prices
            { zone: 'PC Standard', hours: 'Ночь', price: 700 },
            { zone: 'PC VIP', hours: 'Ночь', price: 1000 },
            { zone: 'PC Bootcamp', hours: 'Ночь', price: 1100 },
            { zone: 'PlayStation 5', hours: 'Ночь', price: 1400 }
        ]
    },
    
    gallery: [
        {
            id: 1,
            title: 'Неоновый логотип',
            image: 'assets/images/gallery/logo-neon.jpg',
            alt: 'Неоновый логотип MetaWorld'
        },
        {
            id: 2,
            title: 'PS5 Зона',
            image: 'assets/images/gallery/ps5-zone.jpg',
            alt: 'Зона PlayStation 5 с неоновой подсветкой'
        },
        {
            id: 3,
            title: 'DUO Зал',
            image: 'assets/images/gallery/duo-hall.jpg',
            alt: 'DUO зал для двоих'
        },
        {
            id: 4,
            title: 'TRIO Зал',
            image: 'assets/images/gallery/trio-hall.jpg',
            alt: 'TRIO зал для команды'
        },
        {
            id: 5,
            title: 'VIP Зал',
            image: 'assets/images/gallery/vip-hall.jpg',
            alt: 'VIP зал с премиум оборудованием'
        },
        {
            id: 6,
            title: 'Standard Зал',
            image: 'assets/images/gallery/standard-hall.jpg',
            alt: 'Standard зал с комфортными местами'
        },
        {
            id: 7,
            title: 'TV Зал',
            image: 'assets/images/gallery/tv-hall.jpg',
            alt: 'TV зал для отдыха'
        },
        {
            id: 8,
            title: 'Кальянная',
            image: 'assets/images/gallery/hookah.jpg',
            alt: 'Кальянная зона'
        },
        {
            id: 9,
            title: 'Атмосфера',
            image: 'assets/images/gallery/atmosphere.jpg',
            alt: 'Атмосфера клуба с неоновой подсветкой'
        }
    ]
};
