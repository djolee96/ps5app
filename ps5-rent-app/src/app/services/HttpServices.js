class HttpServices {


    post(url, data, token) {

        return fetch(url,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'auth-token': `${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())

    };

    patch(url, data, token) {
        return fetch(url, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'auth-token': `${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
    }

}

export const http = new HttpServices()