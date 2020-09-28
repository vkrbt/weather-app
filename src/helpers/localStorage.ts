export function setItem(key: string, value: string) {
    if (window.localStorage) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
        window.dispatchEvent(new Event('storage-change'));
    }
}

export function getItem(key: string) {
    if (window.localStorage) {
        let value = window.localStorage.getItem(key);

        if (!value) {
            return null;
        }

        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }
}

export function removeItem(key: string) {
    if (window.localStorage) {
        window.localStorage.removeItem(key);
        window.dispatchEvent(new Event('storage-change'));
    }
}

export const CITIES_STORAGE_KEY = 'cities';
