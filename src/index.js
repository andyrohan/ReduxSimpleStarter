import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyCjXWSsO3umNGTsfXYzC3eUxlmmOvaFjEE';

// create a new component that generates HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

// take the generated HTML and put in on the page, i.e. in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))