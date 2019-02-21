import React from 'react'

const SearchRating = ({ rate, starClicked }) => {
    return (
        <div>
            {Array.from({ length: 5 }, (star, i) => (
                <span onClick={() => { starClicked(i + 1) }}>
                    {i < rate ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
};

export default SearchRating;