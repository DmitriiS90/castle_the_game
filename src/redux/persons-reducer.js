const initialState = {
    player: {isKing: false, speechInPrison: ['В каком смысле жив? Я должен быть мертвым?', 'Кто ты? Как попал за решетку?', 'Серьезно', 'Красавец']},
    startText: {isClick: true,  speech: 'Вы отчнулись в неизвестном месте, похожим на тюрьму. Сильно болит голова, как-будто кто-то ударил по ней. В груди гиганская рана, необходимо быстрее найти, чем её перевезать.Перед вами две двери - нужно отыскать выход отсюда, иначе вам невыкоробкаться.'},
    menInPrison: {isClick: false, speech: ['Вы живы?!. Невероятно.', 'Вы кароль', 'Я пытался спасти вас']}
};

const personsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_START_TEXT':
            return {
                ...state,
                startText: {isClick: false}
            }
        case 'MEN_IN_PRISON':
            //debugger
            return {
                ...state,
                menInPrison: {...state.menInPrison, isClick: true}
            }
        case 'GET_INFORMATION_ABOUT_MYSELF':
            //debugger
            return {
                ...state,
                player: {...state.player, isKing: true}
            }
        default:
            return state;
    }
};

// export const clickPersonLocation1 = (key) => {return {type: SET_KEY, key}};

export default personsReducer;