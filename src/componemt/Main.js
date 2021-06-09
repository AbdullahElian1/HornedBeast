
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import Selected from './Selected';
import Form1 from './Form1';
import { Form } from 'react-bootstrap';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfClick: 0,
            show: false,
            numOfHoner: '',
            DataToShow: Data


        }
    }
    showBeast = () => {
        this.setState({
            show: !this.state.show
        })
    }



    updateHorn = (event) => {
        // console.log(event.target.value);
        this.setState({
            numOfHoner: event.target.value,
        })
        console.log(this.state.numOfHoner);

    }


    rendershowing = (event) => {
         let fillterdata=[];
         const number=event.target.value;
         
         console.log(number);

        if (number === 'all') {
            this.setState({
                DataToShow: Data,
            })
        }
        else {
            Data.filter((item) => {
                if (item.horns === parseInt(number)) {
                    fillterdata.push(item);
                }
            });
            this.setState({
                DataToShow: fillterdata,
            })
        }



    }

    





    render() {
        return (

            <div>
                {/* <Form1 honor={this.updateHorn}  />
                {this.rendershowing('all')} */}

                <Form >
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Number Of Honor</Form.Label>
                        <Form.Control as="select" custom name='numOfHoner' onChange={this.rendershowing} >
                            <option value="all">all</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">wow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>



                <CardColumns>
                    {this.state.DataToShow.map(item => {

                        return (

                            <HornedBeast

                                title={item.title}
                                url={item.image_url}
                                des={item.description}
                                show1={this.showBeast}


                            />


                        )


                    })}
                </CardColumns>



            </div>

        )
    }


}


export default Main;






