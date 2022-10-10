import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-orange-400 p-8 flex justify-around align-middle'>
            <div>
                <h2 className='text-orange-900 text-3xl font-bold'>Coders Quizzical</h2>
            </div>
            <nav>
                <Link className=' text-xl p-2 rounded-xl font-bold text-amber-700 mr-5 hover:text-red-600 bg-orange-200' to='/'>Home</Link>
                <Link className='text-xl p-2 rounded-xl font-bold text-amber-700 mr-5 hover:text-red-600 bg-orange-200' to='/topic'>Topic</Link>
                <Link className='text-xl p-2 rounded-xl font-bold text-amber-700 mr-5 hover:text-red-600 bg-orange-200' to='/statistics'>Statistics</Link>
                <Link className='text-xl p-2 rounded-xl font-bold text-amber-700 mr-5 hover:text-red-600 bg-orange-200' to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;