export async function get(url: string, options: RequestInit = {}) {
    try {
        let response = await fetch(url, options);

        if (response.ok) {
            return response.json();
        }

        throw response;
    } catch (err) {
        console.log(err);

        throw err;
    }
}

export function post(url: string, data: Dict, options: RequestInit = {}) {
    let {headers, ...params} = options;

    return get(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
        ...params,
    });
}
