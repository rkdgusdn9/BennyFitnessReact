import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
    return <div>
        <span>
            this is a home page
        </span>
        <Button/>
        <Link to="/jobs"> GO TO JOBS PAGE </Link>
    </div>
}
