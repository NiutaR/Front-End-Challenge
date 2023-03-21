import React from "react";
import k from "./Keybord.module.css";

const Keybord = (props) => {

    return (
        <div className={k.container}>
            <div className={k.leftRows}>
                <div className={k.rowZero}>
                    <button>Esc</button>
                    <button>F1</button>
                    <button>F2</button>
                    <button>F3</button>
                    <button>F4</button>
                    <button>F5</button>
                    <button>F6</button>
                    <button>F7</button>
                    <button>F8</button>
                    <button>F9</button>
                    <button>F10</button>
                    <button>F11</button>
                    <button>F12</button>
                    <button>Insect</button>
                    <button className={k.print}>printScr</button>
                    <button>Delete</button>
                </div>


                <div className={k.rowOne}>
                    <button>~ <div> `</div></button>
                    <button>1 <div> !</div></button>
                    <button>2 <div> @</div></button>
                    <button>3 <div> #</div></button>
                    <button>4 <div> $</div></button>
                    <button>5 <div> %</div></button>
                    <button>6 <div> %</div></button>
                    <button>7 <div> ^</div></button>
                    <button>8 <div> &</div></button>
                    <button>9 <div> (</div></button>
                    <button>0 <div> )</div></button>
                    <button>_<div> -</div></button>
                    <button>= <div> +</div></button>
                    <button className={k.back}>Backspace</button>
                    <button>Home</button>

                </div>


                <div className={k.rowTwo}>
                    <button className={k.tab}>Tab</button>
                    <button>Q</button>
                    <button>W</button>
                    <button>E</button>
                    <button>R</button>
                    <button>T</button>
                    <button>Y</button>
                    <button>U</button>
                    <button>I</button>
                    <button>O</button>
                    <button>P</button>
                    <button> [ <div>{"{"}</div></button>
                    <button> ] <div>{"}"}</div></button>
                    <button className={k.slace}>\ <div>|</div> </button>
                    <button>Pg Up</button>

                </div>


                <div className={k.rowThree}>
                    <button className={k.cap}>Caps Lock</button>
                    <button>A</button>
                    <button>S</button>
                    <button>D</button>
                    <button>F</button>
                    <button>G</button>
                    <button>H</button>
                    <button>I</button>
                    <button>J</button>
                    <button>K</button>
                    <button>L</button>
                    <button>; <div>:</div></button>
                    <button>" <div>;</div></button>
                    <button className={k.enterBtn}>Enter</button>
                    <button>Pg Dn</button>

                </div>

                <div className={k.rowFour}>
                    <button className={k.shift}>Shift</button>
                    <button>Z</button>
                    <button>X</button>
                    <button>C</button>
                    <button>V</button>
                    <button>B</button>
                    <button>N</button>
                    <button>M</button>
                    <button> {"<"} <div>,</div></button>
                    <button> {">"} <div>.</div> </button>
                    <button>? <div> /</div></button>
                    <button className={k.shift}>Shift</button>
                    <button>↑</button>
                    <button>End</button>
                </div>

                <div className={k.rowFive}>
                    <button className={k.last}>Ctrl</button>
                    <button className={k.last}>Fn</button>
                    <button className={k.last}>Win</button>
                    <button className={k.last}>Alt</button>
                    <button className={k.space}>space</button>
                    <button className={k.last}>Alt</button>
                    <button className={k.last}>Fn</button>
                    <button className={k.last}>Ctrl</button>
                    <button className={k.last}>←</button>
                    <button className={k.last}>↓</button>
                    <button className={k.last}>→</button>
                </div>

            </div>
            <div className={k.rightBlock}>
                <div className={k.rowSix}>
                    <button className={k.rightBtn}>PgUp</button>
                    <button className={k.rightBtn}>PgDn</button>
                    <button className={k.rightBtn}>Home</button>
                    <button className={k.rightBtn}>Num Lock</button>
                    <button className={k.rightBtn}>/</button>
                    <button className={k.rightBtn}>*</button>
                    <button className={k.rightBtn}>Print Screen</button>
                    <button className={k.rightBtn}>Scrool Look</button>
                    <button className={k.rightBtn}>Pause</button>
                    <button className={k.rightBtn}>Insert</button>
                    <button className={k.rightDelete}>Delete</button>
                    <button className={k.rightBtn}>Insert</button>
                    <button className={k.rightEnd}>Cancel</button>
                    <button className={k.rightBtn}>+</button>

                </div>
            </div>


        </div>
    );
}

export default Keybord;