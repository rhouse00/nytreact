import React from 'react';

class Article extends React.Component{



    render(){
        return (
            <div className='row'>
                <div className='col-md-10'>
                    <div className='well well-sm'>
                    <a href={this.props.link} target='_blank'> <h4>{this.props.title}</h4> </a>
                    </div>
                </div>
                <div className='col-md-2'>
                    <button type='submit'>Save Article</button>
                </div>
            </div>
        ); // end of Return
    } // end of Render
}; //end of Component

export default Article;