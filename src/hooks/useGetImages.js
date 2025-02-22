import { useEffect, useState } from "react";

const useGetImages = (gameOptions) => {
    const [images, setImages] = useState([]);

    const fetchPics = async () => {
        try {
            const response = await fetch("/.netlify/functions/fetchImages", {
                method: "POST",
                body: JSON.stringify(gameOptions),
            });

            if (!response.ok) throw new Error("Failed to fetch images");

            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    useEffect(() => {
        if (!gameOptions) return;
        fetchPics();
    }, [gameOptions]);

    return images;
};

export default useGetImages;
