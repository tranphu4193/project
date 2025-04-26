import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../../store";

export interface NotificationState {
    message: string;
    type: string;
    visible: boolean;
}

export const initialState: NotificationState = {
    message: '',
    type: 'info', // 'success' | 'error' | 'warning' | 'info'
    visible: false,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification(state, action) {
            const { message, type = 'info' } = action.payload;
            state.message = message;
            state.type = type;
            state.visible = true;
        },
        hideNotification(state) {
            state.visible = false;
        },
    },
});

export const selectNotificationState = (state: RootState): NotificationState => state.notification;
export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
