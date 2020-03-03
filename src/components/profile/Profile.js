import React from 'react';
import {Button} from 'react-bootstrap';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div style={{flex: 1}}>
                <Button type="button" className="btn btn-primary">Primary</Button>
            </div>
        )
    }
}

export default Home;
