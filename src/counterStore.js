export const INCREMENT = 'COUNTER/INCREMENT'
export const DECREMENT = 'COUNTER/DECREMENT'

//can provide parameters inside action generators

export function incrementAction(incrementAmount = 1){
    return {type: INCREMENT, incrementAmount}
}

export function decrementAction(decrementAmount = 1){
    return{type:DECREMENT, decrementAmount}
}

export function counterReducer(
    state=0,
    action
){

    switch (action.type){
        case INCREMENT:
            return state + action.incrementAmount
        case DECREMENT:
            return state - action.decrementAmount
        default:
            return state
    }

}
