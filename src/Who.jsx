import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardGroup, CardText } from 'reactstrap';

class Who extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: '100%', margin: '2%'}}>
                <CardGroup>
                    <Card>
                        <CardImg top width='100%' src="./../public/etsit.jpg" alt='Image 1'/>
                        <CardBody>
                            <CardTitle>Desarrollador 1</CardTitle>
                            <CardText>Texto describiendo al Desarrollador 1</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src="./../public/etsit.jpg" alt='Image 1'/>
                        <CardBody>
                            <CardTitle>Desarrollador 2</CardTitle>
                            <CardText>Texto describiendo al Desarrollador 2</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src="./../public/etsit.jpg" alt='Image 1'/>
                        <CardBody>
                            <CardTitle>Desarrollador 3</CardTitle>
                            <CardText>Texto describiendo al Desarrollador 3</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src="./../public/etsit.jpg" alt='Image 1'/>
                        <CardBody>
                            <CardTitle>Desarrollador 4</CardTitle>
                            <CardText>Texto describiendo al Desarrollador 4</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src="./../public/etsit.jpg" alt='Image 1'/>
                        <CardBody>
                            <CardTitle>Desarrollador 5</CardTitle>
                            <CardText>Texto describiendo al Desarrollador 5</CardText>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default Who;
