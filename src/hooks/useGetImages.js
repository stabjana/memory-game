import axios from "axios";
import { useEffect, useState } from "react";

// const BASE_URL = 'https://api.pexels.com/v1/search';

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = () => {
    const [images, setImages] = useState([]);

    const buildUrl = () => {
        const url = new URL("https://api.pexels.com/v1/search");
        url.search = new URLSearchParams({
            query: "nature", // TO DO: Replace with a variable for dynamic queries
            orientation: "square",
            size: "small",
            per_page: 2, // TO DO: Replace with a variable
            page: getRandomPage()
        });
        return url.toString(); // Convert the URL object to a string
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use the buildUrl function to generate the URL
                const url = buildUrl();

                const response = await axios.get(url, {
                    headers: {
                        Authorization: import.meta.env.VITE_AUTH_KEY,
                    },
                });
                console.log("Pexels API response data:", response.data);
                setImages(data.photos);

            } catch (error) {
                if (error.response) {
                    console.error("Error response:", error.response);
                } else {
                    console.error("Error message:", error.message);
                }
            }
        };

        fetchData();
    }, []);

    return images;
};

export default useGetImages;
