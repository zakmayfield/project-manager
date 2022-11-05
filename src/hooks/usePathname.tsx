import { useLocation } from 'react-router-dom';

export const usePathname = (): string => {
    const location = useLocation()
    return location.pathname
}