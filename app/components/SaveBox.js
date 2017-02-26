import React, { Component } from 'react';
import SavedArticle from './SavedArticles'

class SaveBox extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        let articleTitles = this.props.savedArticles
            .map((item, index) =>{
            return <SavedArticle _handleDeleteBtn={ this.props._handleDeleteBtn} key={index} title={item.title} link={item.link} /> });
        
        return (
            <div className='panel panel-info'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>Saved Articles</h3>
                </div>
                <div className='panel-body'>
                    {articleTitles}
                </div>
            </div>
        ); // end of Return
    } // end of Render

}; // end of Component
export default SaveBox;