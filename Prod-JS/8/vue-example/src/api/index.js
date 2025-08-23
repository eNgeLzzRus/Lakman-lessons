const API_URL = 'http://localhost:3000';

async function request(url, method = "GET", body) {
    const options = { method, headers: {} };

    if (body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${url}`, options);
    return response.json();
}

export function getCatalog() {
    return request("/catalogData");
}

export function getCart() {
    return request("/cart");
}

export function addToCart(good) {
    return request("/addToCart", "POST", good);
}

export function moreInCart(good) {
    return request("/moreInCart", "POST", good);
}

export function lessInCart(good) {
    return request("/lessInCart", "POST", good);
}

export function removeFromCart(good) {
    return request("/removeFromCart", "POST", good);
}

export function clearCartApi() {
    return request("/clearCart", "POST");
}