import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import axios from 'axios';

class NewPost extends React.PureComponent {
    state = {
        showform: false,
        title: null,
        content: null,
        posted: false,
        display: false
    }
    displayHandler = () => {
        setTimeout(() => {
            this.setState({
                display: false
            })
        }, 5000)
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    formSubmitHandler = () => {
        let data = {
            title: this.state.title,
            content: this.state.content
        }
        axios.post('/posts', data)
            .then(response => {
                this.setState({
                    posted: true,
                    display: true
                });
                this.displayHandler()
            })
    }
    formShowHandler = () => {
        console.log('clicking the function')
        this.setState((prevstate) => ({
            showform: !prevstate.showform
        }))
    }
    render() {
        let newpost;
        let alert;

        this.state.display ? alert = <div className="alert alert-primary" role="alert">
            Submitted Successfully!
      </div> : alert = null;
        const addPostForm = <div>
            <div className="form-group">
                <label>Enter title</label>
                <input type="text" name="title" className="form-control" onChange={this.onChangeHandler} id="exampleFormControlInput1" placeholder="enter title" />
            </div>
            <div className="form-group">
                <label>Enter content</label>
                <input type="text" name="content" className="form-control" onChange={this.onChangeHandler} id="exampleFormControlInput2" placeholder="enter content" />
            </div>
            <button type="button" className="btn btn-success" onClick={this.formSubmitHandler}>Success</button>
        </div>

        this.state.showform && !this.state.posted ? newpost = addPostForm : newpost = <div onClick={this.formShowHandler}><h3 style={{ border: '2px solid black', cursor: 'pointer'}}>Add a new Post</h3></div>

        return (
            <Aux>
                {newpost}
                {alert}
            </Aux>
        )
    }
};

export default NewPost;