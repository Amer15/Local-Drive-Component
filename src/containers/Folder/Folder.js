import React, { Component } from 'react';
import SubFolder from '../../components/SubFolder/SubFolder';
import './Folder.css';



class Folder extends Component {
    constructor(props) {
        super(props);

        this.state = {
          show: false,  
          subFolder: this.props.subFolders
        }
    }

   
    onClickHandler = () => {
      let show = this.state.show;  
      this.setState({
          show: !show
      })
    }

    render() {
        const Icon = !this.state.show ? <ion-icon name="chevron-forward-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>; 
        return (
            <div className="main-folder-container"
                onClick={this.onClickHandler}>
                <div className="folder-container">
                    <div className="icon">
                        {Icon}
                    </div>
                    <div className="folder-name-container">
                        <h4>{this.props.folderName}</h4>
                    </div>
                </div>
                {this.state.show ? this.state.subFolder.map( (sub,index) => {
                    return <SubFolder key={index} name = {sub} />
                }): null}
            </div>
        )
    }
}



export default Folder;