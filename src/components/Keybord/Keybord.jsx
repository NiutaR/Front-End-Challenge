import React from "react";
import Row from "./Row/Row";
import keybordStyles from './Keybord.module.css';
import keys from "../../data/keys.json";

const Keyboard = () => {
    const rows = keys.map((row, index) => <Row key={index} row={row} />);
    return (
        <div className={keybordStyles.container}>
            <div className={keybordStyles.keyboard}>{rows}</div>
        </div>
    );
};

export default Keyboard;
