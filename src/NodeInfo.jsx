import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
class NodeInfo extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Información del nodo</Card.Title>
                        <Card.Text>
                            {this.props.node ? this.props.node.title : "seleccione un nodo en el grafo."}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default NodeInfo;