import React from "react";

export function useEventListener(
    target: EventTarget | null,
    event: string,
    callback: EventListener,
    deps: any[],
    options?: boolean | AddEventListenerOptions
) {
    let listener = React.useCallback(callback, deps);

    React.useEffect(() => {
        if (!target) {
            return;
        }

        target.addEventListener(event, listener, options);

        return () => {
            target.removeEventListener(event, listener, options);
        };
    }, [target, event, listener, options]);
}
