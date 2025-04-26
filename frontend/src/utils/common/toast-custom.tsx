import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {hideNotification, selectNotificationState} from "./toast-slice";

const ModalAlert: React.FC = () => {
    const dispatch = useDispatch();
    const { message, type, visible } = useSelector(selectNotificationState);

    return (
        <>
            <Modal title="Basic Modal" open={visible} onOk={() => {
                dispatch(hideNotification());
            }} onCancel={() => {
                dispatch(hideNotification());
            }}>
                <p>{message}</p>
            </Modal>
        </>
    );
};

export default ModalAlert;