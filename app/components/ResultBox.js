import React, { Component } from 'react';
import Articles from './Articles'

class ResultBox extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        var articleTitles = this.props.articleData.map( 
            (item, index) =>{ return <Articles key={index} title={item.title} link={item.link} /> });
        return (
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>Top 5 Results</h3>
                </div>
                <div className='panel-body'>
                    {articleTitles}
                </div>
            </div>
        ); // end of Return
    } // end of Render

}; // end of Component
export default ResultBox;