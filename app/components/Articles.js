import React, { Component } from 'react';

class Article extends Component{

    render(){
        return (
            <div className='row'>
                <div className='col-md-10'>
                    <div className='well well-sm'>
                    <a href={this.props.link} id={this.props.key} target='_blank'> <h4>{this.props.title}</h4> </a>
                    </div>
                </div>
                <div className='col-md-2'>
                    <button onClick={this.props._handleSaveBtn} data-link={this.props.link} data-title={this.props.title} type='submit'>Save Article</button>
                </div>
            </div>
        ); // end of Return
    } // end of Render

}; //end of Component

export default Article;