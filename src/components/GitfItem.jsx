import React from 'react'

export const GitfItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
