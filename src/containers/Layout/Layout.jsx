import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>Hello iam the layout</h1>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
};

export default Layout;