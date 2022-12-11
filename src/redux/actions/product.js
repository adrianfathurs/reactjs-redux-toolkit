export const productActions = {
  update: (state, action) => {
    let {title, price} = action.payload
    let prod =  state.product[action.payload.id]

    prod = {...prod, title, price}
    state.product[action.payload.id] = prod 
  },
  add: (state, action) => {
    state.product.push({
        title: action.payload.title,
        price: action.payload.price
    })
  },
}