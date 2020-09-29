import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import {withRouter} from 'react-router-dom';
const PostCard = props => {
    console.log(props);
   return(
    <Aux>
    <div className='col-lg-3' >
        <div className="card text-white bg-primary mb-3" style={{height : '250px', width : '250px' , cursor : 'pointer' }}>
            <div className="card-header">Header</div>
            <div className="card-body" onClick={props.clicked} onDoubleClick={() => props.history.push('/addpost')}>
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.title}</p>
            </div>
        </div>
    </div>
</Aux>
   )
};

export default withRouter(PostCard);