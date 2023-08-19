
import { useCallback, useState } from 'react'

type DialogComponentType = (props: any) => JSX.Element | null;

const useDialogModel = (Component: any): [DialogComponentType, () => void] => {
    const [open, setOpen] = useState(false)

    const openDialog = useCallback(() => {
        setOpen(true)
    }, []);

    const DialogComponent = useCallback(({ ...props }) => {
        if (!open) return null;
        // Always return the Component if it exists, or null if it doesn't
        return Component ? (
            <Component open={open} onClose={() => setOpen(false)} {...props} />
        ) : null;
    }, [open, Component])

    return [DialogComponent, openDialog]

}

export default useDialogModel