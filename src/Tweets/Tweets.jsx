import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed'
import '../Tweet/Tweet.css'
class Tweets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tweetWidth: null
        }

        this.tweetsContainerRef = React.createRef();
    }


    updateDimensions = () => {
        this.setState({ tweetWidth: this.tweetsContainerRef.current ? this.tweetsContainerRef.current.offsetWidth : 0 })
    };

    componentDidUpdate = () => {
        if (!this.state.tweetWidth && this.tweetsContainerRef.current)
            this.updateDimensions();
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <div ref={this.tweetsContainerRef} className="tweets-container" style={this.state.tweetWidth ? { width: this.state.tweetWidth + 'px' } : {}}>
                <h3>{this.props.title}</h3>
                <ListGroup style={{ overflow: 'scroll', height: '50vh' }}>
                    {this.props.tweets && this.state.tweetWidth ? this.props.tweets.map((tweet, index) => {
                        return <ListGroup.Item key={index} style={{ padding: 0 }}>
                            <TwitterTweetEmbed
                                tweetId={tweet.tweet_url.split("/")[3]}
                                options={{ cards: 'hidden', width: this.state.tweetWidth - 5, lang: 'es', maxWidth: this.state.tweetWidth - 5 }}
                                onLoad={tweetWidgetEl => {
                                    this.props.setTweetsLoaded();
                                    if (tweetWidgetEl) {
                                        const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.EmbeddedTweet')
                                        tweetEl.style.width = (this.state.tweetWidth - 5) + 'px'
                                        tweetEl.style.maxWidth = (this.state.tweetWidth - 5) + 'px'
                                    }
                                }}
                            />
                        </ListGroup.Item>
                    }) : <></>}
                </ListGroup>
            </div>
        );
    }
}

export default Tweets;