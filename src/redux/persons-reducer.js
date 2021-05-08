const initialState = {
    player: {
        isKing: false,
        chest: 'locked',
        kingsRoom: false,
        setClockHands: false,
        isOpenedLock: false,
        speechInPrison: ['В каком смысле жив? Я должен быть мертвым?', 'Кто ты? Как попал за решетку?', 'Серьезно', 'Красавец'],
        speechWithGuards: ['Пропусти', 'Вы знаете, что со мной случилость', '111', 'Давай ключ'],
    },
    startText: {
        isClick: true,
        speech: 'Вы отчнулись в неизвестном месте, похожим на тюрьму. Сильно болит голова, как-будто кто-то ударил по ней. В груди гиганская рана, необходимо быстрее найти, чем её перевезать.Перед вами две двери - нужно отыскать выход отсюда, иначе вам невыкоробкаться.'
    },
    menInPrison: {
        isClick: false,
        speech: ['Вы живы?!. Невероятно.', 'Вы кароль', 'Я пытался спасти вас'],
    },
    guards: {
        isClick: false,
        speech: ['Стой, кто идет?. Ёпт, наш король!!', 'Нужен ключ от сундука?'],
    },
    inessa: {
        isClick: false,
        speech: ['ЁЁЁЁЁЁп'],
    },
    edvard: {
        isClick: false,
        speech: ['Тыыы'],
    },
    karl: {
        isClick: false,
        speech: ['Чтоо'],
    },
};

const personsReducer = (state = initialState, action) => {
    switch (action.type) {
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