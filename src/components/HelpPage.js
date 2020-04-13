import React from 'react';
import { Link } from 'react-router-dom';
const HelpPage = () => (
  <div>
    <h1>This is from my help component</h1>
    <Link to="/">Go home</Link>
  </div>
);

export default HelpPage;
