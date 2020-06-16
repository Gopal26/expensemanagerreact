export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          expenses: state.expenses.filter(expense => expense.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          expenses: [action.payload, ...state.expenses]
        }
      default:
        return state;
    }
  }