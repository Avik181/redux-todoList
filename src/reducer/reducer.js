const initialData = {
  list: []
};
const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
            id: id
          }
        ]
      };

    case "DELETE":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList
      };
    default:
      return state;
  }
};

export default todoReducer;
