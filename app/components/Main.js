import React, { Component } from 'react';
import Search from './Search';
import ResultBox from './ResultBox';
import Saved from './Saved';
import helpers from './utils/helpers';


class Main extends Component{

    constructor(props){
        super(props);

        this.state = {
            topic: '',
            startYear: '',
            endYear: '',
            results: []
        };

        this.setSearch = this.setSearch.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.topic !== this.state.topic || prevState.startYear !== this.state.startYear || prevState.endYear !== this.state.endYear) {
           
            helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then( (data) =>{
                if(data !== this.state.results){
                    console.log(data);
                    
                    this.setState({results: data});
                } //End of second IF
            }); // End of Helpers
            
        } // End of first IF
    } // End of componentUpdate

    setSearch(term, start, end){
        this.setState({
            topic: term,
            startYear: start,
            endYear: end
        });
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='page-header'>
                        <h1 className='text-center'>New York Times News Scruber</h1>
                        <p className='text-center'>Search for and get a snippet!</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Search setSearch={this.setSearch}/>
                    </div>  
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ResultBox articleData={this.state.results} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Saved />
                    </div>  
                </div>
            </div>
        ); // end of Return
    } // End of Render
}; // End of Component

export default Main;