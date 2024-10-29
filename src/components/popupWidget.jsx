import { atom, useRecoilState, useResetRecoilState } from "recoil";
import { signInForm, signUpForm } from "./popups/authforms";
import './styles/popups.css'
import { useEffect, useState } from "react";

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
export function PopupWidget()
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
                return signInForm();
            case 'signup':
                return signUpForm();
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
}