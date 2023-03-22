import React, {Dispatch, SetStateAction} from "react";

export default interface HomePageProps {
    scrollToHandler: React.MouseEventHandler<HTMLButtonElement>,
    buttonClickHandler: React.MouseEventHandler<HTMLButtonElement>,
    setShowPopup: (value: boolean) => void,
    popupType: string,
    setPopupType: (value: string) => void,
    isStaging: boolean,
    setScrollTo: Dispatch<SetStateAction<number>>,
    showPopup: boolean,
    auth: boolean
}
