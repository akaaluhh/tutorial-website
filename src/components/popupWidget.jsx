import { atom, selector, useResetRecoilState } from "recoil";
import './styles/popups.css'

// Show popup widget and hide background if popup is visible
export const isPopupVisible = atom({
    key: 'isPopupVisible',
    default: false,
});

// popup widget container
export function PopupWidget()
{
    const resetPopupVisible = useResetRecoilState(isPopupVisible);
    return (
        <div className="popup">
            <h1>
                Sign In
            </h1>
            <button onClick={() => { resetPopupVisible(); }}>
                Exit
            </button>
        </div>
    );
}