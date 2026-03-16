'use client'
import React from "react";

export default function LikeButton({ resetLikeButton = false }: { resetLikeButton?: boolean }) {
    const [likes, setLikes] = React.useState(0);

    function handleLike() {
        setLikes(likes + 1);
    }

    function resetLikes() {
        setLikes(0);
    }

    return (
        <>
            <div className="mb-2">
                <button className="bg-taupe-800 dark:bg-taupe-300 text-taupe-800 px-3 py-2 rounded-lg" onClick={handleLike}>Likes ({likes})</button>
            </div>
            {resetLikeButton ? (
                <div className="mt-2">
                    <button className="bg-taupe-800 dark:bg-taupe-400 text-taupe-900 px-3 py-2 rounded-lg" onClick={resetLikes}>Reset Likes</button>
                </div>
            ) : null}
        </>
    );
}