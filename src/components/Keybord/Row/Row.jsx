import React from "react";
import rowStyles from './Row.module.css';
import Key from "./Key/Key";

const Row = ({ row }) => {
    
    return (
        <div className={rowStyles.row}>
            {row.map((keyData, index) => (
                <Key
                    key={`key-${index}`}
                    label={keyData.label}
                    value={keyData.value}
                    className={keyData.className}
                />
            ))}
        </div>
        
        
    );
};

export default Row;

