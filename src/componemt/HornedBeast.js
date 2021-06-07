import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';



class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numOfClick : 0
        }
    }

    // incrementClick(){
    //     this.setState({
    //         numOfClick:this.state.numOfClick +1
    //     })
    // }

    incrementClick = () => {
        this.setState({
            numOfClick : this.state.numOfClick+1
        })
    }

    render(){
        return(
            // <div className='horned'>
            //    <h2>{this.props.titleName}</h2>
            //    <p>{this.props.des}</p>
            //    <img  src={this.props.url} alt={this.props.alter} onClick={this.incrementClick}/>
            //    <p>Number Of Click: {this.state.numOfClick}</p>
            // </div>
               
                <Card style={{ width: '18rem' }}>   
                <Card.Img variant="top" src={this.props.url} onClick={this.incrementClick} />
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.des}
                </Card.Text>
                <Card.Text>
                Number Of Click: {this.state.numOfClick}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
               
                



        );
    }
}

export default HornedBeast;