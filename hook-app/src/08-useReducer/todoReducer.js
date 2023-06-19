export const todoReducer = (initialState = [], action) => {

    switch(action.type){
        case 'ABC':
            throw new Error('Action.type = ABC não está implementada');
          
        default:
            return initialState;
    }

}