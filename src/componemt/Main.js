
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import Selected from './Selected';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numOfClick : 0,
            show:false
        }
    }
    showBeast = () => {
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return(
            <div>
                <CardColumns>
                {Data.map(item=>{
                    return(
                        
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


   



