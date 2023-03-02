import { React, useEffect, useState, useContext, useRef } from "react";
import { MyContext } from "../App";

export default function Works() {
    const [first, setFirst] = useContext(MyContext).first;
    const [thumbTop, setThumbTop] = useState(0);
    const [boxStyles, setBoxStyles] = useState([{}, {}, {}, {}, {}]);
    const [thumbStyles, setThumbStyles] = useState({
        transform: "",
        height: "",
    });

    const boxContainerRef = useRef(null);

    useEffect(() => {
        if (boxContainerRef.current) {
            const boxContainer = boxContainerRef.current;

            //set_thumb_height
            const thumbHeight =
                (boxContainer.clientHeight / boxContainer.scrollHeight) *
                    boxContainer.clientHeight -
                2;

            setThumbStyles((prev) => ({
                ...prev,
                height: `${thumbHeight}px`,
            }));

            //set_box_posn
            const box_elements_sttyles = [0, 1, 2, 3, 4].map((i) => {
                const box_posn =
                    boxContainer.childNodes[i].getBoundingClientRect().top;
                return {
                    transform: `translateX(${-box_posn * 0.3 + 30}px)`,
                };
            });

            setBoxStyles(box_elements_sttyles);
        }
    }, []);

    function handleScroll(e) {
        // console.log([
        //     e.target.scrollTop, //thumb positino
        //     e.target.scrollHeight, //content height
        //     e.target.clientHeight, //visibel area height
        // ]);

        //set_thumb_position
        const thumbPosn = e.target.scrollTop / 2;

        setThumbStyles((prev) => ({
            ...prev,
            transform: `translateY(${thumbPosn}px)`,
        }));
        setThumbTop(e.target.scrollTop);

        //change_box_Y_position
        const box_elements_styles = [0, 1, 2, 3, 4].map((i) => {
            const box_posn = e.target.childNodes[i].getBoundingClientRect().top;

            return {
                // transform: `translateX(${-box_posn * 0.3}px)`,
                transform: "skew(-16deg)",
                left: `${-box_posn * 0.3}px`,
            };
        });

        setBoxStyles(box_elements_styles);
    }

    //create_box_elements
    const box_array = [0, 1, 2, 3, 4];
    const box_elements = box_array.map((i) => {
        return (
            <div key={i} className="box" style={boxStyles[i]}>
                {i}
            </div>
        );
    });

    const test = (e) => {
        console.log(e.currentTarget.scrollTop);
        e.currentTarget.scrollTop += 100;
    };

    return (
        <div className="works">
            <div className="box_container_wrapper">
                <div
                    className="box_container"
                    ref={boxContainerRef}
                    onScroll={handleScroll}
                    onClick={test}
                >
                    {box_elements}
                </div>
            </div>
            <div className="scroll_bar">
                <div className="thumb" style={thumbStyles}></div>
            </div>
            <h1>
                My<br></br>Works
            </h1>
        </div>
    );
}
