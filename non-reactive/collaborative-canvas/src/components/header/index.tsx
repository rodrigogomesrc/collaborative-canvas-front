import React from "react";
import { useEffect, useState } from "react";

const onLogout = () => {
    localStorage.removeItem("playerId");
    localStorage.removeItem("username");
    window.location.href = "/";
};

export default function Header() {

    const [username, setUsername] = useState("");

    useEffect(() => {
        const username = localStorage.getItem("username");
        if (username !== null) {
            setUsername(username);
        }
    }, []);

    const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            padding: "10px"
        },
            username: {
            marginRight: "8px",
        },
            logout: {
            color: "red",
            cursor: "pointer",
        },
    };

    return (
        <div style={styles.container}>
        <div>
            <span style={styles.username}>{username}</span>
        </div>
        <div>
            <span style={styles.logout} onClick={() => onLogout()}>
            Logout
            </span>
        </div>
        </div>
    );
}
