import { useLayoutEffect, useState } from 'react';
import { AppViewInterface } from '../interfaces/AppViewInterface';

/**
 * Custom Hook to check what version of the app to show
 */
export function useApplicationLayout(): AppViewInterface {
    const [view, setView] = useState<AppViewInterface>('desktop');
    useLayoutEffect(() => {
        function updateSize() {
            window.innerWidth < 728 && window.innerHeight < 1024 ? setView('mobile') : setView('desktop');
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return view;
}
