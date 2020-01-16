import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tweets from './Tweets/Tweets';
import Graph from './Graph';
import NodeInfo from './NodeInfo';
import TweetsBoli from './jsons/tweets-boli.json';
import TweetsCoca from './jsons/tweets-coca.json';
import TweetsPastillas from './jsons/tweets-coca.json';
import TweetsRitmo from './jsons/tweets-ritmo.json';
import LoadingOverlay from 'react-loading-overlay';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphDimensions: null,
            selectedNode: null,
            tweetsLoaded: false
        }

        this.graphContainerRef = React.createRef();
    }

    setTweetsLoaded = () => {
        if (!this.state.tweetsLoaded)
            this.setState({ tweetsLoaded: true })
    }
    changeSelectedNode = node => {
        this.setState({ selectedNode: node });
    }

    updateDimensions = () => {
        this.setState({ graphDimensions: this.graphContainerRef.current ? { width: this.graphContainerRef.current.offsetWidth, height: this.graphContainerRef.current.offsetHeight } : { width: 0, height: 0 } })
    };

    componentDidUpdate = () => {
        if (!this.state.graphDimensions && this.graphContainerRef.current)
            this.updateDimensions()
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <div>
                <LoadingOverlay
                    active={!this.state.tweetsLoaded}
                    spinner
                    text='Cargando datos...'
                >
                </LoadingOverlay>
                <Container>
                    <Row className="Graph" style={{ height: '40vh', marginBottom: '5vh', marginTop: '5vh' }}>
                        <Col ref={this.graphContainerRef}>
                            {this.state.graphDimensions ? <Graph width={this.state.graphDimensions.width} height={this.state.graphDimensions.height} changeSelectedNode={this.changeSelectedNode} /> : <></>}
                        </Col>
                        <Col style={{ padding: '20px' }}>
                            <NodeInfo node={this.state.selectedNode} />
                        </Col>
                    </Row>
                    <Row className="Tweets" style={{ height: '40vh', marginBottom: '5vh', marginTop: '5vh' }}>
                        <Col>
                            <Tweets setTweetsLoaded={this.setTweetsLoaded} title="Boli" tweets={TweetsBoli} />
                        </Col>
                        <Col>
                            <Tweets setTweetsLoaded={this.setTweetsLoaded} title="Coca-Cola" tweets={TweetsCoca} />
                        </Col>
                        <Col>
                            <Tweets setTweetsLoaded={this.setTweetsLoaded} title="Pastillas" tweets={TweetsPastillas} />
                        </Col>
                        <Col>
                            <Tweets setTweetsLoaded={this.setTweetsLoaded} title="Menstruación" tweets={TweetsRitmo} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;