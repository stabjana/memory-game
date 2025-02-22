import axios from "axios";

export async function handler(event) {
    const { category, cardsCount } = JSON.parse(event.body);

    const url = new URL("https://api.pexels.com/v1/search");
    url.search = new URLSearchParams({
        query: category,
        orientation: "square",
        size: "small",
        per_page: cardsCount / 2,
        page: Math.floor(Math.random() * 10) + 1,
    });

    try {
        const response = await axios.get(url.toString(), {
            headers: {
                Authorization: process.env.VITE_AUTH_KEY, // Securely access the key
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data.photos),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch images" }),
        };
    }
}
