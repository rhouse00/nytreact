import React from 'react';
import Articles from './Articles'
class Results extends React.Component {

    _getArticles(){
        const objectArray =[];
        return objectArray.map((article) => {
            return (
                <Article title={article.title} date={article.date} key={article.id} />
            )
        })
    }
    
    render(){
        return (
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>Top 5 Results</h3>
                </div>
                <div className='panel-body'>
                    <div className='well'></div>
                </div>
            </div>
        ); // end of Return
    } // end of Render
}; // end of Component
export default Results;