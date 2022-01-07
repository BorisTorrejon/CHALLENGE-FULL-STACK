export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                transactions: payload,
            };
        case "PUT_TRANSACTIONS":
            return {
                ...state,
                transaction: payload,
            };
        case "ChangeButton":
            return {
                ...state,
                button: payload,
            }
        case "PUT_BALANCE":
            return {
                ...state,
                balance: payload,
            };
        default:
            return state;
    }
}