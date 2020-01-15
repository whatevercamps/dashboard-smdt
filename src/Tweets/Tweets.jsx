import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed'
import '../Tweet/Tweet.css'
class Tweets extends Component {


    render() {
        return (
            <div ref={this.tweetContainerRef}>
                <h3>{this.props.title}</h3>
                <ListGroup style={{overflow: 'scroll', height:'50vh'}}>
                    {this.props.tweets ? this.props.tweets.map((tweet, index) => {
                        return <ListGroup.Item key={index} style={{padding:0}}>
                            <TwitterTweetEmbed
                                tweetId={tweet.tweet_url.split("/")[3]}
                                options={{ width: '100%', lang:'es'}}
                            />
                        </ListGroup.Item>
                    }) : <></>}
                </ListGroup>
            </div>
        );
    }
}

export default Tweets;