import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  LOADING: "Loading..",
  IDLE: "idle",
  ERROR: "error",
});

const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    // setProducts: (state, action) => {
    //   state.data = action.payload;
    // },
    // setStatuses: (state, action) => {
    //   state.status = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatuses } = productSlice.actions;
export default productSlice.reducer;

//async thunk ==> the middleware used to fetch data from server
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
});

// export const fetchedProducts = () => {
//   return async function fetchedThunkProducts(dispatch, getData) {
//     dispatch(setStatuses(STATUSES.LOADING));

//     try {
//       let dataStore = await fetch("https://fakestoreapi.com/products");
//       let res = await dataStore.json();
//       console.log(res);
//       dispatch(setProducts(res));
//       dispatch(setStatuses(STATUSES.IDLE));
//     } catch (err) {
//       dispatch(setStatuses(STATUSES.ERROR));
//     }
//   };
// };
