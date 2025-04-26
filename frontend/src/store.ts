import { configureStore } from "@reduxjs/toolkit";

import perfumesSlice, { PerfumesState } from "./redux-toolkit/perfumes/perfumes-slice";
import perfumeSlice, { PerfumeState } from "./redux-toolkit/perfume/perfume-slice";
import userSlice, { UserState } from "./redux-toolkit/user/user-slice";
import ordersSlice, { OrdersState } from "./redux-toolkit/orders/orders-slice";
import orderSlice, { OrderState } from "./redux-toolkit/order/order-slice";
import cartSlice, { CartState } from "./redux-toolkit/cart/cart-slice";
import authSlice, { AuthState } from "./redux-toolkit/auth/auth-slice";
import adminSlice, { AdminState } from "./redux-toolkit/admin/admin-slice";
import notificationSlice, {NotificationState} from "./utils/common/toast-slice";

export interface RootState {
    admin: AdminState;
    auth: AuthState;
    cart: CartState;
    order: OrderState;
    orders: OrdersState;
    perfume: PerfumeState;
    perfumes: PerfumesState;
    user: UserState;
    notification: NotificationState;
}

export const storeReducer = {
    admin: adminSlice,
    auth: authSlice,
    cart: cartSlice,
    order: orderSlice,
    orders: ordersSlice,
    perfume: perfumeSlice,
    perfumes: perfumesSlice,
    user: userSlice,
    notification: notificationSlice,
};

export const store = configureStore({
    reducer: storeReducer
});
