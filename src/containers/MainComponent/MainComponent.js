import React,{ Component } from "react";
import DriveComponent from '../../components/DriveComponent/DriveComponent';
import './MainComponent.css';

class MainComponent extends Component{
    constructor(){
        super();

        this.state = {
            drives: [
                {   
                    id: 0,
                    driveName:'C:',
                    isExpanded: false
                },
                {
                    id: 1,
                    driveName:'D:',
                    isExpanded: false
                },
                {
                    id: 2,
                    driveName:'E:',
                    isExpanded: false
                }
            ]
        }
    }

    onClickHandler = (id) => {
        const newArray = [...this.state.drives];
        newArray.forEach( drive => {
            if(drive.id === id){
                drive.isExpanded = !drive.isExpanded;
            }
        });

       this.setState({
           drives: newArray
       })

    }
    render(){
        return(
            <div className='main-container'>
              <div className='drives-container'>
                {this.state.drives.map( drive => {
                    return <DriveComponent 
                    key={drive.id}
                    driveName = {drive.driveName} 
                    isExpanded = {drive.isExpanded}
                    onclick = {() => this.onClickHandler(drive.id)} />
                })}
              </div>
            </div>
        )
    }
}

export default MainComponent;