import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function RecordingPage() {
    const videoUrl = 'https://www.aws.com/html/mov_bb.mp4';
    const cameras = [
        'Camera 1',
        'Camera 2',
        'Camera 3',
        'Camera 4',
        'Camera 5',
        'Camera 6',
    ];

    return (
        <div>
            <h1>Recording Page</h1>
            <Row>
                {cameras.map((camera, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{camera}</Card.Title>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={videoUrl}
                                    title={camera}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default RecordingPage;
