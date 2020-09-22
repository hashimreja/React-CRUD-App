import React from 'react';
import axios from 'axios';

class FullPost extends React.Component {
    state = {
        fullpost: null
    }
    componentDidUpdate = () => {
        if (this.props.postid) {
            if (!this.state.fullpost || (this.state.fullpost.id !== this.props.postid))
                axios.get('/posts/' + this.props.postid)
                    .then(res => {
                        console.log(res)
                        this.setState({
                            fullpost: res.data
                        })
                    })
        }
    }
    render() {
        let fullpost = <div><p>Please select a post</p></div>;
        if (this.props.postid) {
            fullpost = <div className="spinner-border text-success"  role="status">
          </div>
        }
        if (this.state.fullpost) {
            fullpost =
    
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-10">{this.state.fullpost.title}</h1>
                        <p class="lead">{this.state.fullpost.body}</p>
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