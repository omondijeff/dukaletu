const initialState = {
  products: [
    {
      id: 1,
      title: "Phone Cover",
      description:
        "A phone cover is a piece of plastic or other material that is designed to protect the phone from damage or scratches.",
      price: "$10.00",
      category: "electronics",
    },
  ],
};
export const ProductReducer = (state, { type, payload }) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
