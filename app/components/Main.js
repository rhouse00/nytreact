import React, { Component } from 'react';
import Search from './Search';
import ResultBox from './ResultBox';
import SaveBox from './SaveBox';
import helpers from './utils/helpers';


class Main extends Component{

    constructor(props){
        super(props);

        this.state = {
            topic: '',
            startYear: '',
            endYear: '',
            results: [],
            saved: []
        };

        this.setSearch = this.setSearch.bind(this);
        this.updateSaved = this.updateSaved.bind(this);
        this.addSaved = this.addSaved.bind(this);
        this._handleSaveBtn = this._handleSaveBtn.bind(this);
        this._handleDeleteBtn = this._handleDeleteBtn.bind(this);
    }
    componentDidMount(){
        helpers.getArticles().then( (saved) => {
                let newArray = this.state.saved.slice();
                newArray = saved.data;
                this.setState({ saved: newArray });
            });
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.topic !== this.state.topic || prevState.startYear !== this.state.startYear || prevState.endYear !== this.state.endYear) {
            helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then( (data) =>{
                if(data !== this.state.results){
                    this.setState({results: data});
                } //End of second IF
            }); // End of Helpers
        } // End of first IF

        if(prevState.saved.length !== this.state.saved.length){
            helpers.getArticles().then( (saved) => {
                if(saved.data !== this.state.saved){
                    let newArray = this.state.saved.slice();
                    newArray = saved.data;
                    this.setState({ saved: newArray });
                }
            });
        }
    } // End of componentUpdate
    updateSaved(object){
        let array = this.state.saved;
        let index = array.findIndex(x => x.title == object.title);
        array.splice(index, 1);
        this.setState({saved: array});
    }
    addSaved(object){
        let array = this.state.saved;
        array.push(object);
        this.setState({saved: array});
    }

    setSearch(term, start, end){
        this.setState({
            topic: term,
            startYear: start,
            endYear: end
        });
    }
    _handleSaveBtn (event) {
        event.preventDefault();
        let object = {
            title: event.target.getAttribute('data-title'),
            link: event.target.getAttribute('data-link')
        }
        helpers.saveArticle(object);
        this.addSaved(object);
    }

    _handleDeleteBtn (event){
        event.preventDefault();;
        let object = {
            title: event.target.getAttribute('data-title'),
            link: event.target.getAttribute('data-link')
        }
        this.updateSaved(object);
        helpers.deleteArticle(object);
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
                        <ResultBox articleData={this.state.results} _handleSaveBtn={this._handleSaveBtn} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <SaveBox savedArticles={this.state.saved} _handleDeleteBtn={this._handleDeleteBtn} />
                    </div>  
                </div>
            </div>
        ); // end of Return
    } // End of Render
}; // End of Component

export default Main;