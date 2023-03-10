import { React, useEffect, useState, useContext } from "react";
import { MyContext } from "../App";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [sendedAni, setSendedAni] = useState({
        sended: {},
        notice: {},
        smile_icon: {},
        loading_icon: {},
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
                    "contact_h3 1s 3s forwards, contact_h3_move 0.5s forwards infinite alternate",
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

    //open_email_client---------------------------------
    const mailToMe = () => {
        window.open("mailto:oorkin18@gmail.com");
    };

    //handle_form_submit----------------------------------
    const firebaseConfig = {
        apiKey: "AIzaSyCHBTFEFVQS0FHd2jJwsS4eCDeWK-zFzMo",
        authDomain: "my-portfolio-370107.firebaseapp.com",
        projectId: "my-portfolio-370107",
        storageBucket: "my-portfolio-370107.appspot.com",
        messagingSenderId: "595118165942",
        appId: "1:595118165942:web:de15d9f92bcd4c2b143b17",
        measurementId: "G-1YRT10912L",
    };
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();

    function handle_submit(event) {
        event.preventDefault();

        const dbRef = ref(db, "contactFormData");
        push(dbRef, formData);

        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }, 1000);

        setSendedAni({
            sended: { animation: "contact_sended 7s forwards" },
            notice: { animation: "contact_notice 0.5s 2s forwards" },
            smile_icon: { animation: "contact_smile_icon 0.5s 2s forwards" },
            loading_icon: {
                animation: "contact_loading_icon 1.5s linear infinite",
            },
        });

        setTimeout(() => {
            setSendedAni({
                sended: {},
                notice: {},
                smile_icon: {},
                loading_icon: {},
            });
        }, 10000);
    }

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
                        <div className="sended" style={sendedAni.sended}>
                            <p className="notice" style={sendedAni.notice}>
                                Thanks!<br></br>Response coming soon.
                            </p>
                            <img
                                src={require("../images/contact/positive.png")}
                                alt="positive"
                                className="smile_icon"
                                style={sendedAni.smile_icon}
                            />
                            <img
                                src={require("../images/contact/loading.png")}
                                alt="loading"
                                className="loading_icon"
                                style={sendedAni.loading_icon}
                            />
                        </div>
                        <form onSubmit={handle_submit}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="name"
                                required="required"
                                onChange={(event) => {
                                    setFormData((prev) => {
                                        return {
                                            ...prev,
                                            name: event.target.value,
                                        };
                                    });
                                }}
                                value={formData.name}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="email"
                                required="required"
                                onChange={(event) => {
                                    setFormData((prev) => {
                                        return {
                                            ...prev,
                                            email: event.target.value,
                                        };
                                    });
                                }}
                                value={formData.email}
                            />
                            <textarea
                                name="messgae"
                                id="message"
                                cols="1"
                                rows="1"
                                placeholder="Message"
                                className="message"
                                onChange={(event) => {
                                    setFormData((prev) => {
                                        return {
                                            ...prev,
                                            message: event.target.value,
                                        };
                                    });
                                }}
                                value={formData.message}
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
                            className="form_background_img"
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
