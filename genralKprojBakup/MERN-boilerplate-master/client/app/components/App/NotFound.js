import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h2>Because the Page you were looking for is not found</h2>

    <Link to="/">Go on break, go on vacation, or go home</Link>
  </>
);

export default NotFound;
