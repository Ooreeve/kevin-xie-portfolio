import { React, useEffect, useState, useContext } from "react";
import { MyContext } from "../App";

export default function Contact() {
    const [first, setFirst] = useContext(MyContext).first;

    const [aniStyles, setAniStyles] = useState({
        h1: {},
        contact_container: {},
        form_container: {},
        h2: {},
        icon_container: {},
        h3: {},
    });

    const setAni = () => {
        setAniStyles({
            h1: { animation: "contact_h1 2.5s forwards" },
            contact_container: {
                animation: "contact_container 2s forwards",
            },
            form_container: {
                animation: "contact_form_container 1s 2s forwards",
            },
            h2: { animation: "contact_h2 1s 3s forwards" },
            icon_container: { animation: "contact_icon 0.5s 3s forwards" },
            h3: {
                animation:
                    "h3 1s 3s forwards, contact_h3_move 0.5s forwards infinite alternate",
            },
        });
    };

    //set-h1-animation
    useEffect(() => {
        if (first == true) {
            setTimeout(() => {
                setAni();
            }, 1500);
            setFirst(false);
        } else {
            setTimeout(() => {
                setAni();
            }, 500);
        }
    }, []);

    //open-email-client
    const mailToMe = () => {
        window.open("mailto:oorkin18@gmail.com");
    };

    return (
        <div className="contact">
            <h1 style={aniStyles.h1}>Contact Info.</h1>
            <div
                className="contact_container"
                style={aniStyles.contact_container}
            >
                <div className="email_address">
                    <h2 onClick={mailToMe} style={aniStyles.h2}>
                        oorkin18
                        <br />
                        @gmail
                        <br />
                        .com
                    </h2>
                </div>
                <div className="message_box">
                    <h3 style={aniStyles.h3}>Say Something!</h3>
                    <div
                        className="form_container"
                        style={aniStyles.form_container}
                    >
                        <form>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="name"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="email"
                            />
                            <textarea
                                name="messgae"
                                id="message"
                                cols="1"
                                rows="1"
                                placeholder="Message"
                                className="message"
                            ></textarea>
                            <input
                                type="submit"
                                id="submit"
                                value="Send"
                                className="submit"
                            />
                        </form>
                        <img
                            src={require("../images/home/home_bg_1_tiny.png")}
                            alt="home_bg_1_tin"
                        />
                    </div>
                </div>
                <div className="smp_box">
                    <div
                        className="icon_container"
                        style={aniStyles.icon_container}
                    >
                        <img
                            className="icon"
                            src={require("../images/contact/smp_icon/facebook.png")}
                            alt="facebook"
                            onClick={() => {
                                window.open(
                                    "https://www.facebook.com/profile.php?id=100090678307235"
                                );
                            }}
                        />
                        <img
                            className="icon"
                            src={require("../images/contact/smp_icon/instagram.png")}
                            alt="instagram"
                            onClick={() => {
                                window.open(
                                    "https://www.instagram.com/oorkin18/"
                                );
                            }}
                        />
                        <img
                            className="icon"
                            src={require("../images/contact/smp_icon/linkedin.png")}
                            alt="linkedin"
                            onClick={() => {
                                window.open(
                                    "https://www.linkedin.com/in/kai-yu-xie-60b7a6267/"
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
