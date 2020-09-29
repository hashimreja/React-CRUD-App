import React from 'react';
import axios from 'axios';

class FullPost extends React.Component {
    state = {
        fullpost: null
    }
    componentDidMount = () => {
        if (this.props.match.params.id) {
            if (!this.state.fullpost || (this.state.fullpost.id !== this.props.match.params.id))
                axios.get('/posts/' + this.props.match.params.id)
                    .then(res => {
                        console.log(res)
                        this.setState({
                            fullpost: res.data
                        })
                    })
        }
    }
    render() {
        let fullpost =  <div style={{ display: 'flex', marginLeft: '500px' }} className="spinner-border text-success" role="status"></div>;
        if (this.props.postid) {
            fullpost = <div style={{display : 'flex' , marginLeft : '500px'}} className="spinner-border text-success"  role="status">
          </div>
        }
        if (this.state.fullpost) {
            fullpost =
    
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-10">{this.state.fullpost.title}</h1>
                        <p className="lead">{this.state.fullpost.body}</p>
                    </div>
                </div>

        }
        return (
            <div>
                {fullpost}
            </div>
        )
    }
};

export default FullPost;