import React, { Component } from 'react';
import Folder from '../../containers/Folder/Folder';
import './DriveComponent.css';

class DriveComponent extends Component {

    render() {
        const Icon = this.props.isExpanded ? <ion-icon name="chevron-down-outline"></ion-icon> : <ion-icon name="chevron-forward-outline"></ion-icon>;

        let FolderNames;
        if (this.props.driveName === 'C:') {
            FolderNames = [
                {   
                    folder: 'Program Files',
                    subFolders: ['Windows NT', 'Windows Mail', 'Windows Photos Viewer']
                },
                {
                    folder: 'Users',
                    subFolders: ['Nishant', 'Siddhart']
                },
                {
                    folder: 'Windows',
                    subFolders: ['Boot', 'File Manager']
                }
            ];
        }
        else if (this.props.driveName === 'D:') {
            FolderNames = [
                {   
                    folder: 'Personals',
                    subFolders: ['MyPhoto.png', 'Resume.pdf']
                },
                {
                    folder: 'Projects',
                    subFolders: ['Calculator Application', 'Notes Application']
                },
                {
                    folder: 'Office',
                    subFolders: ['Reports.docx']
                }
            ];
        }
        else {
            FolderNames = [
                {   
                    folder: 'Pictures',
                    subFolders: ['Cat.png']
                },
                {
                    folder: 'Documents',
                    subFolders: ['ProgressReport.docx', 'DesignDoc.pdf']
                },
                {
                    folder: 'Study Materials',
                    subFolders: ['HTML.html','Css.pdf','JS.pdf']
                }
            ];
        }

        const FolderContainer = this.props.isExpanded ? FolderNames.map((folder, index) => {
            return <Folder
                key={index}
                folderName={folder.folder}
                subFolders={folder.subFolders} />
        }) : null


        return (
            <div className="main-drive-container">
                <div className="drive-container" onClick={this.props.onclick}>
                    <div className="icon">
                        {Icon}
                    </div>
                    <div className="drive-name-container">
                        <h4>Local Disk ({this.props.driveName})</h4>
                    </div>
                </div>
                {FolderContainer}
            </div>
        )
    }
}






export default DriveComponent;