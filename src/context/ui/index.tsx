import { createContext, useState, useContext } from "react";


export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);
interface Props {
    children?: React.ReactNode
}
export const UIProvider = ({ children }: Props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);

    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBox,
        setShowSearchBox
    }

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}