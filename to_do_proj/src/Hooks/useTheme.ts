import {useLayoutEffect, useState} from "react";


export const useTheme = () => {
    const [theme, setTheme] = useState('dark')

    useLayoutEffect(() => {
        document.documentElement.setAttribute('app-theme', theme)
    }, [theme])

    return {theme, setTheme}
}