import { clsx } from 'clsx';

export const Widget = ({className, children}) => {
    return (
        <div className={clsx("rounded-md p-4 bg-neutral-750 border border-neutral-600", className)}>
            {children}
        </div>
    )
}