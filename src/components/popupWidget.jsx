import { atom, selector } from "recoil";

// Show popup widget and hide background if popup is visible
export const isPopupVisible = atom({
    key: 'isPopupVisible',
    default: false,
});

// popup widget container
export function PopupWidget()
{
    return
    (
        <div>

        </div>
    );
}