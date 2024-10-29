import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import './styles/popups.css'

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
    const resetPopupVisible = useResetRecoilState(isPopupVisible);
    const [type] = useRecoilState(popupType);

    const renderPopup = () =>
    {
        switch (type)
        {
            case 'signin':
                return <>Sign In</>;
            case 'signup':
                return <>Sign Up</>;
            default:
                return <></>;
        }
    }

    return (
        <div className="popup">
            <h1>
                {renderPopup()}
            </h1>
            <button onClick={() => { resetPopupVisible(); }}>
                Exit
            </button>
        </div>
    );
}