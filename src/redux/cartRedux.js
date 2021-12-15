import{createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity: 0,
        total : 0
    },
    reducers:{
        addProduct: (state, action)=>{
            console.log(action.payload)
            state.quantity += 1;
            const a = state.products.find(b=>b.title == action.payload.title)
            
            if(!a){state.products.push(action.payload)}
            console.log(state.products)
            state.total += action.payload.price * action.payload.quantity;
        }
    }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer