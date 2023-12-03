import React from 'react';

const ListItem = ({ title, description }) => {
    return (
        <li className="my-3">
            <div className="title">
                <div className="title-element title-left">
                    <input type="checkbox" name="checkbox-group" />
                    {/* <label htmlFor={`checkbox-${index}`}></label> */}
                </div>
                <h3 className="title-element title-left">{title}</h3>
                <button className="title-element title-right">﹀</button>
            </div>
            <div className="hidden description">{description}</div>
        </li>
    );
};

export default ListItem;
