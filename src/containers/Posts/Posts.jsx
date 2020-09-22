import React from 'react';
import axios from 'axios';
import PostCard from '../../components/PostCard/PostCard';
import Aux from '../../hoc/Auxillary/Auxillary';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Posts extends React.Component{
    state = {
        posts : [],
        selectedid : null
    }
    componentDidMount () {
        axios.get('/posts')
        .then(res => {
            const posts = res.data.slice(0,4);
            let updatedposts = posts.map(data => { return{...data, name : 'hashim'}});
            this.setState({
                posts : updatedposts
            })
        })
    }
    selectIdHandler = (id) => {
        this.setState({
            selectedid : id
        })
    }
    render(){
        const getposts = this.state.posts.map(data => {return <PostCard key={data.id} name={data.name} title={data.title}  clicked={ () => this.selectIdHandler(data.id)}/>})
        return(
            <Aux>
        <div className='row'>
            {getposts}
            <FullPost postid={this.state.selectedid}/>
        </div>
        <div className='row'>
            <NewPost/>
        </div>
        </Aux>
        )
    }
};


export default Posts;