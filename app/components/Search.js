import React from 'react';
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            topic: '',
            startYear: '',
            endYear: ''
        };
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(event){
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    _handleSubmit(event){
        event.preventDefault();
        console.log("CLICK");
        this.props.setSearch(this.state.topic, this.state.startYear, this.state.endYear);
        console.log(this.state.topic);
        this.setState({ 
            topic: '',
            startYear: '',
            endYear: ''
        });
    }
    
    render(){
        return (
            <div className='panel panel-warning'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>Search:</h3>
                </div>
                <div className='panel-body'>
                    <div></div>
                    <form method='GET' action='/api/search' onSubmit={this._handleSubmit.bind(this)}>
                        <div className='form-group'>
                            <label for='topic' >Topic to Search: </label>
                            <input type='text' className='form-control' id='topic' value={this.state.topic} onChange={this._handleChange} placeholder='Example: Triangle Factory Fire' name='' />
                        </div>
                        <div className='form-group'>
                            <label for='startYear'>Start Year: </label>
                            <input type='text' className='form-control' id='startYear' value={this.state.startYear} onChange={this._handleChange} placeholder='1919' name='' />
                        </div>
                        <div className='form-group'>
                            <label for='endYear'>End Year: </label>
                            <input type='text' className='form-control' id='endYear' value={this.state.endYear} onChange={this._handleChange} placeholder='1922' name='' />
                        </div>
                           <button type='submit' className='btn btn-primary'>Submit</button> 
                    </form>
                </div>
            </div>
        ); // end of Return
    } // end of Render

}; // end of Component
export default Search;