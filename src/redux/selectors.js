export const selectProducts = state => state.products.items;

export const selectIsLoading = state => state.products.isLoading;

export const selectProductItem = state => state.productItem.item;

export const selectIsLoadingProduct = state => state.productItem.isLoading;

export const selectIsCheckingLogin = state => state.auth.isCheckingLogin;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectIsLoogedIn = state => state.auth.isLoggedIn;
