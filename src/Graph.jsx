import React, { Component } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import DataGrafo from './jsons/red_s1.json';
import {Card} from 'react-bootstrap';

class Graph extends Component {
    
    handleClick = node => {
        this.props.changeSelectedNode(node)
    }
    render() {
        return (
            <Card bg="light">
                <Card.Body style={{padding: 0}}>
                    <ForceGraph2D
                        width={this.props.width}
                        height={this.props.height}
                        graphData={DataGrafo}
                        nodeLabel="title"
                        onNodeClick={this.handleClick}
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default Graph;