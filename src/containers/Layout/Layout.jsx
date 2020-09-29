import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.module.css';
class Layout extends React.Component {
    render() {
        return (
            <div className='container'>
                <header style={{backgroundColor : 'black'}}>
                    <nav>
                        <ul style={{ display: 'flex' }}>
                            <li style={{ listStyle: "none", margin: '10px' }}><NavLink to="/"exact activeStyle={{textDecoration:'underline',color:'white'}}>Home</NavLink></li>
                            <li style={{ listStyle: "none", margin: '10px' }}><NavLink to="/posts" exact activeStyle={{textDecoration:'underline',color:'white'}}>Posts</NavLink></li>
                            <li style={{ listStyle: "none", margin: '10px' }}><NavLink to="/addpost"exact activeStyle={{textDecoration:'underline',color:'white'}}>Add Post</NavLink></li>
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