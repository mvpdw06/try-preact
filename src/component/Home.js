import { h } from 'preact';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/search">Seatch</Link></p>
        <p><Link to="/inputstateapp">Input state component</Link></p>
    </div>
)

module.exports = Home;