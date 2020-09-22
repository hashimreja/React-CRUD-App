import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';

const PostCard = props => (
    <Aux>
        {/* <div className={styles.PostCard}>
          <div className={styles.Title}>{props.name}</div>
          <div className={styles.Title}>{props.title}</div>
      </div> */}
        <div className='col-lg-3' >
            <div className="card text-white bg-primary mb-3" style={{height : '250px', width : '250px' , cursor : 'pointer' }}>
                <div className="card-header">Header</div>
                <div className="card-body" onClick={props.clicked}>
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.title}</p>
                </div>
            </div>
        </div>
    </Aux>
);

export default PostCard;