import React from 'react';
import axios from 'axios';
import PostCard from '../../components/PostCard/PostCard';
import Aux from '../../hoc/Auxillary/Auxillary';
import { Link } from 'react-router-dom';
class Posts extends React.Component {
    state = {
        posts: [],
        selectedid: null
    }
    componentDidMount() {
        console.log(this.props, 'iam hereeee')
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                let updatedposts = posts.map(data => { return { ...data, name: 'hashim' } });
                this.setState({
                    posts: updatedposts
                })
            })
    }
    selectIdHandler = (id) => {
        this.setState({
            selectedid: id
        })
    }
    render() {
        let getposts;
        if (this.state.posts.length !== 0) {
            getposts = this.state.posts.map(data => { return <Link key={data.id} to={'/fullpost/' + data.id}><PostCard key={data.id} name={data.name} title={data.title} clicked={() => this.selectIdHandler(data.id)} /></Link> })
        } else {
            getposts = <div style={{ display: 'flex', marginLeft: '500px' }} className="spinner-border text-success" role="status"></div>
        }
        return (
            <Aux>
                <div className='row'>
                    {getposts}
                </div>
            </Aux>
        )
    }
};


export default Posts;