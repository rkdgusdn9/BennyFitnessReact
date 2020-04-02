import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    buttonText: string;
    link: string;
}
export const Button: React.FC<Props> = (props) => {
    const {buttonText, link} = props;
    return <Link to={link} className="button">
            {buttonText}
        </Link>
}
