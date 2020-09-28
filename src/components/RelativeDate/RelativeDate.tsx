import * as React from 'react';
import {formatDate} from "../../helpers/formatDate";

export interface RelativeDateProps {
    className?: string;
    timestamp: number;
}

export const RelativeDate: React.FC<RelativeDateProps> = ({className, timestamp}) => {
    const [seconds, setSeconds] = React.useState(1);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds + 1);
        }, 10000);

        return () => clearInterval(timer);
    });

    return (
        <span className={className}>
            {formatDate(timestamp)}
        </span>
    );
}
