import React, {Component} from 'react';
import './App.css';
import {getContacts} from './util';
import AutoComplete from 'react-autocomplete';

const CONTACTS = getContacts();
const menuStyle = {
    border: '1px solid #dfdfdf',
    borderRadius: '.2rem',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    paddingBottom: '.5rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    lineHeight: '1.5rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
    textAlign: 'left',
    minWidth: '90%'
};

const inputProps = {
    "data-qa": "user_search_txt",
    placeholder: "Search by name",
    style: {
        border: '1px solid #dfdfdf',
        borderRadius: '.2rem',
        backgroundColor: '#fff',
        fontSize: '1.2rem',
        padding: '.5rem 8rem .6rem .6rem',
        transition: 'all 0.2s ease',
        minWidth: '90%',
        outline: 'none'
    }
};

class App extends Component {

    constructor(props) {
        super(props);

        this.selectionMade = this.selectionMade.bind(this);
        this.searchTermChanged = this.searchTermChanged.bind(this);

        this.state = {
            searchTerm: '',
            openResultsList: false
        }
    }

    componentDidMount() {
        this.searchTermInputElement.focus();
    }

    selectionMade(value) {
        this.setState({
            searchTerm: value,
            openResultsList: false
        });

        alert(`you've selected ${value}`);

        this.setState({
            searchTerm: '',
        });
    }

    searchTermChanged(event) {
        const searchTerm = event.target.value;
        const searchTermLength = searchTerm ? searchTerm.length : 0;
        this.setState({
            searchTerm: searchTerm,
            openResultsList: searchTermLength > 0
        });
    }

    render() {
        const {state} = this;
        const open = state.openResultsList;
        const value = state.searchTerm;
        return (
            <div className="App">
                <header className="App-header">
                    <h2>react-autocomplete sandbox</h2>
                </header>
                <div className="search-container">
                    <AutoComplete
                        value={value}
                        inputProps={inputProps}
                        items={CONTACTS}
                        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        getItemValue={item => item.label}
                        onSelect={person => this.selectionMade(person)}
                        onChange={event => this.searchTermChanged(event)}
                        renderItem={(item, highlighted) =>
                            <div
                                key={item.value}
                                className={`search-item ${highlighted ? 'search-item-highlighted' : ''}`}
                            >
                                {item.label}
                            </div>
                        }
                        ref={(input) => this.searchTermInputElement = input}
                        wrapperStyle={{
                            position: 'relative',
                            display: 'inline-block',
                        }}
                        menuStyle={menuStyle}
                        open={open}
                        autoHighlight={true}
                    />
                </div>
            </div>
        );
    }
}

export default App;
