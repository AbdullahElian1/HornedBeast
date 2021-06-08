import React from 'react';
import {Modal} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Selected extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         show:true
    //     }
    // }


    // incrementClick = () => {
    //     this.setState({
    //         show:!this.state.show
    //     })
    // }

    close =()=>{
       this.props.clo();

    }

    render(){
        return(
            <div>
                {/* <h1>'hgjhk</h1> */}
                 <Card style={{ width: '18rem' }}>   
                 
                 <Modal
                show={this.props.showw} onHide={this.close}
               
               
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* <Card onClick={this.incrementClick}></Card> */}
                <Card.Img variant="top" src={this.props.url1}/>
                    {/* <h4></h4> */}
                    <p>
                    {this.props.des1}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
                </Modal>
                </Card>

                </div>


            
        );
    }

    
}


export default Selected;


