import axios from "axios";
import { useEffect, useState } from "react";

// const BASE_URL = 'https://api.pexels.com/v1/search';

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = (gameOptions) => {
    const [images, setImages] = useState([]);

    const buildUrl = () => {
        const url = new URL("https://api.pexels.com/v1/search");
        url.search = new URLSearchParams({
            query: gameOptions.category,
            orientation: "square",
            size: "small",
            per_page: gameOptions.cardsCount / 2,
            page: getRandomPage()
        });
        return url.toString(); // Convert the URL object to a string
    };

    const fetchPics = async () => {
        try {
            // Use the buildUrl function to generate the URL
            const url = buildUrl();

            const response = await axios.get(url, {
                headers: {
                    Authorization: import.meta.env.VITE_AUTH_KEY,
                },
            });
            // console.log("Pexels API response data:", response.data);
            setImages(response.data.photos);

        } catch (error) {
            if (error.response) {
                console.error("Error response:", error.response);
            } else {
                console.error("Error message:", error.message);
            }
        }
    };

    // fetchPics();

    useEffect(() => {
        if (!gameOptions) return;
        fetchPics();
    }, [gameOptions]);

    return images;
};

export default useGetImages;
