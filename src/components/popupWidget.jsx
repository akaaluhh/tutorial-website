import { atom, useRecoilState, useResetRecoilState } from "recoil";
import { SignInForm, SignUpForm } from "./popups/authforms";
import './styles/popups.css'
import React, { useEffect, useState } from "react";

// Show popup widget and hide background if popup is visible
export const isPopupVisible = atom({
    key: 'isPopupVisible',
    default: false,
});

export const popupType = atom({
    key: 'popupType',
    default: 'signin',
})

// popup widget container
const PopupWidget = React.memo(() =>
{
    const popupVisible = useRecoilState(isPopupVisible);
    const resetPopupVisible = useResetRecoilState(isPopupVisible);
    const [type] = useRecoilState(popupType);
    const [visibleClass, setVisibleClass] = useState('popup-hidden');

    useEffect(() =>
    {
        if (popupVisible)
        {
            setVisibleClass('popup-fade-in');
        }
    }, []);

    useEffect(() =>
    {
        if (visibleClass == 'popup-fade-in')
        { }
        if (visibleClass == 'popup-fade-out')
        {
            setTimeout(resetPopupVisible, 100);
        }
    }, [visibleClass]);

    function exitButton()
    {
        setVisibleClass('popup-fade-out');
    }

    const renderPopup = () =>
    {
        switch (type)
        {
            case 'signin':
                return (<SignInForm />);
            case 'signup':
                return (<SignUpForm />);
            default:
                return <></>;
        }
    }

    return (
        <div className={`${visibleClass}`}>
            {renderPopup()}
            <button onClick={() => { exitButton(); }} className="popup-exit-button">
                Exit
            </button>
        </div>
    );
})

export { PopupWidget };