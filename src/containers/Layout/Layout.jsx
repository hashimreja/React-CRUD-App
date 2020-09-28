import React from 'react';
import { Link } from 'react-router-dom';
class Layout extends React.Component {
    render() {
        return (
            <div className='container'>
                <header style={{backgroundColor : 'black'}}>
                    <nav>
                        <ul style={{ display: 'flex' }}>
                            <li style={{ listStyle: "none", margin: '10px' }}><Link to="/">Home</Link></li>
                            <li style={{ listStyle: "none", margin: '10px' }}><Link to="/posts">Posts</Link></li>
                            <li style={{ listStyle: "none", margin: '10px' }}><Link to="/addpost">Add Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
};

export default Layout;