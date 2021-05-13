const initialState = {
    player: {
        isKing: false,
        chest: 'locked',
        inHall: true,
        kingsRoom: false,
        setClockHands: false,
        isOpenedLock: false,
        speechInPrison: ['Жив?! Я очнулся в камере этажом ниже. Я совсем ничего ни помню и просто пытаюсь выбраться от сюда', 'Кто вы? Как сюда попали?', 'Вы хотите сказать, что я Король? Но кто тогда заточил меня сюда?', 'Заговор! Предательство? Кто в ответе за случившееся?', 'Мне нужно вычислить заговорщиков. Как только я это сделаю, я вас освобожу'],
        speechWithGuards: ['Я очнулся в темнице в подвале. Я хотел бы услышать объяснения, как могло такое случиться???', 'На меня напали и сильно ударили по голове. В следствии удара у меня случилась потеря памяти. Я пытаюсь все вспомнить, но пока безуспешно. ', 'Мне нужно попасть в мои покои. Там наверника есть какие-нибудь записи, которые прояснят, что произошло в замке.', 'Мне нужен ключ от сундука в соседней комнате.'],
        speechWithInessa: ['Вижу, без меня вы не скучаете. Все собрались в главном зале, явно не на похороны.'],
        speechWithEdvard: ['Ещё нет, но это вопрос времени'],
        speechWithKarl: ['Да, собираюсь её найти. Она мне поможет разобраться, что здесь произошло'],
        letter: ['-Дорогой брат, тебе срочно нужно бежать из замка. Александр со своей сестрой задумали что - то злое против тебя. Сын Александр стал совершеннолетним и теперь претендует на трон. Разумеется стать новым королем можно только избавившись от старого.']
    },
    startGame: false,
    startText: {
        isClick: true,
        speech: 'Вы отчнулись в не знакомом месте, похожим на тюрьму. У вас сильно болит голова, как-будто кто-то ударил по ней. Вы не помните ни кто вы, ни как сюда попали. Перед вами две двери - нужно отыскать выход отсюда, иначе вам невыкоробкаться.'
    },
    endText: ['Из письма стало известно, что заговор организовал Александр со своей сестрой Инессой. Короля предупредили, но заговорщики успели совершить покушение раньше, чем их предательство было раскрыто. После разоблачения Александра с Инессой, Константин бросил их в темницу и освободил заключенных, которые ему помогли. Теперь ничто не мешает законному королю вернуться на трон!'],
    menInPrison: {
        isClick: false,
        speech: ['Вы....вы живы, сир?!. Мы все уже потеряли надежду и думали, что вас не спасти!', 'Совсем ничего...? В...вы же хозяин этого замка!', 'Мой сир, когда случился заговор против вас, мы попытались вас спрятать, но неуспели. Нас предали и поместили сюда.', 'Мы точно не знаем. Но в этом точно причастны, кто-то из знати. Вы должны встретится со своей свитой'],
    },
    guards: {
        isClick: false,
        speech: ['Стой, кто идет?...! Мой король, прошу прощения, мы вас сразу не узнали.', 'Ваш казначей, Эдвард, сказал, что вы уехали из замка. О том, что в темнице появились новые заключенные, мы узнали только вчера от Карла, вашего кузена.','Мой король, вам срочно нужно к главному лекарю. Может он сможет вам помочь. Александр, вместе со своей сестрой Иннесой, сейчас находится в главном зале Замка.','Да, мой Король, как вы и приказали ваши вещи перенесли в новую комноту. Подымитесь по лестнице в главном зале.', 'Вам ещё что - то нужно, Мой король?'],
    },
    inessa: {
        isClick: false,
        speech: ['Константин, как мы рады вас видеть! Как нам повезло, что с вами все впорядке!'],
    },
    edvard: {
        isClick: false,
        speech: ['Константин, друг мой. Как я счастлив, что ты цел и невредим. Ты уже разоблачил заговорщиков?'],
    },
    karl: {
        isClick: false,
        speech: ['Невероятно! Я уже предполагал худшее. Надеюсь с вашей дочерью тоже все в порядке. Со времени её рождения, прошлой весной, Вы выглядели таким счастливым.'],
    },
};

const personsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                startGame: true
            }
        case 'SET_START_TEXT':
            return {
                ...state,
                startText: { isClick: false }
            }
        case 'MEN_IN_PRISON':
            return {
                ...state,
                menInPrison: { ...state.menInPrison, isClick: true }
            }
        case 'GET_INFORMATION_ABOUT_MYSELF':
            return {
                ...state,
                player: { ...state.player, isKing: true }
            }
        case 'CHECKED_KINGSROOM':
            return {
                ...state,
                player: { ...state.player, kingsRoom: true }
            }
        case 'SET_CLOCK_HANDS':
            return {
                ...state,
                player: { ...state.player, setClockHands: true }
            }
        case 'GUARDS':
            return {
                ...state,
                guards: { ...state.guards, isClick: true }
            }
        case 'CLICK_CHEST':
            return {
                ...state,
                player: { ...state.player, chest: 'clicked' }
            }
        case 'CHEST_IS_OPENED':
            return {
                ...state,
                player: { ...state.player, chest: 'opened' }
            }
        case 'OPEN_LOCK':
            return {
                ...state,
                player: { ...state.player, isOpenedLock: true }
            }
        case 'TEXT_IN_HALL':
            return {
                ...state,
                player: { ...state.player, inHall: false }
            }
        case 'TALK_TO_INESSA':
            return {
                ...state,
                inessa: { ...state.inessa, isClick: true }
            }
        case 'OUT_FROM_INESSA':
            return {
                ...state,
                inessa: { ...state.inessa, isClick: false }
            }
        case 'TALK_TO_EDVARD':
            return {
                ...state,
                edvard: { ...state.edvard, isClick: true }
            }
        case 'OUT_FROM_EDVARD':
            return {
                ...state,
                edvard: { ...state.edvard, isClick: false }
            }
        case 'TALK_TO_KARL':
            return {
                ...state,
                karl: { ...state.karl, isClick: true }
            }
        case 'OUT_FROM_KARL':
            return {
                ...state,
                karl: { ...state.karl, isClick: false }
            }
        default:
            return state;
    }
};

// export const clickPersonLocation1 = (key) => {return {type: SET_KEY, key}};

export default personsReducer;