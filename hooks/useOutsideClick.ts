import { MutableRefObject, useEffect } from 'react';

const useOutsideClickHandler = (
    ref: MutableRefObject<HTMLDivElement> | MutableRefObject<null>,
    clickCallback: () => void
) => {
    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (
                !ref.current?.contains(event.target as Node)
        ) {
                clickCallback();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [clickCallback, ref]);
};

export default useOutsideClickHandler;
