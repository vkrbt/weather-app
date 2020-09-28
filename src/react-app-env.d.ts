/// <reference types="react-scripts" />

declare interface Dict<T = any> {
    [key: string]: T;
}

declare type Optional<T = any> = T | undefined;
