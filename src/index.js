import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyCjXWSsO3umNGTsfXYzC3eUxlmmOvaFjEE';



// create a new component that generates HTML
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('frightened rabbit');
    }

    videoSearch(term) {
        YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            }
        );
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChanged={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// take the generated HTML and put in on the page, i.e. in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))