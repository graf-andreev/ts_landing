export async function postData<TResponse>(url:string = '', RequestInit = {}): Promise<TResponse> {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(RequestInit)
    });
    return response.json().then((data) => data as TResponse);
}
