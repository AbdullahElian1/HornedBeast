import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import {Modal} from 'react-bootstrap';
import Data from './data.json';
import { ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Selected from'./Selected';



class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numOfClick : 0,
            show:false
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
        this.setState({
            show:!this.state.show
        })
    }
        

    close =()=>{
        this.setState({
            show:!this.state.show
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
               <div>
                <Card style={{ width: '18rem' }} onClick={this.incrementClick}>   
                <Card.Img variant="top" src={this.props.url}  />
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.des}
                </Card.Text>
                <Card.Text>
                Number Of Click: {this.state.numOfClick}
                </Card.Text>
                <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
                </Card>

                <Selected
            showw={this.state.show}
            name={this.props.title}
            url1={this.props.url}
            des1={this.props.des}
            clo={this.close}


            

             />  
                      


                </div>

                 


                
               
                



        );
    }
}

export default HornedBeast;