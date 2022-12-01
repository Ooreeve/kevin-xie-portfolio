import { React, useState } from "react";

export default function Background() {
    document.addEventListener("mousemove", bgMove);

    const [bg_move_num, setBg_move_num] = useState([]);

    function bgMove(e) {
        // 1920.1040
        //  960. 520
        const mouse_x = e.screenX;
        const mouse_y = e.screenY;
        const bg_move_x = Math.floor(mouse_x * -0.052 + 50);
        const bg_move_y = Math.floor(mouse_y * -0.096 + 50);

        setBg_move_num([bg_move_x, bg_move_y]);
    }

    const trTiming = "0.7s cubic-bezier(0, 0, 0.2, 1)";

    const bg_move_styles = {
        transform: `translate(${bg_move_num[0]}px, ${bg_move_num[1]}px)`,
        transition: `transform ${trTiming}`,
    };

    return (
        <div className="background">
            <div className="bg_img">
                <img
                    style={bg_move_styles}
                    src={require("./images/bg_img.jpg")}
                    alt="bg_img"
                />
            </div>
        </div>
    );
}
