import React from "react";
import type { ReactNode, MouseEvent } from "react";

interface ButtonProps {
    link: string;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ link, children }) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.location.href = link;
    };

    return (
        <a href={link} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Button;
