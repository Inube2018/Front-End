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
                        <div style={{height: '200px', overflow: 'hidden'}}>
                            <CardImg top width='100%' src="/InubeBackEnd/public/jaime.jpg" alt='Image 1'/>
                        </div>
                        <CardBody>
                            <CardTitle>Jaime Hurtado de Mendoza Sastre</CardTitle>
                            <CardText>Developer/Product Owner</CardText>
                            <CardText>"El mundo es digital"</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <div style={{height: '200px', overflow: 'hidden'}}>
                            <CardImg top width='100%' src="/InubeBackEnd/public/roberto.jpg" alt='Image 1'/>
                        </div>
                        <CardBody>
                            <CardTitle>Roberto Llop Cardenal</CardTitle>
                            <CardText>Developer/Scrum Master</CardText>
                            <CardText>"Visualiza, luego construye"</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <div style={{height: '200px', overflow: 'hidden'}}>
                            <CardImg top width='100%' src="/InubeBackEnd/public/paula.jpg" alt='Image 1'/>
                        </div>
                        <CardBody>
                            <CardTitle> Paula  Otero  Colmenar</CardTitle>
                            <div style={{height: '25px'}}></div>
                            <CardText>Developer</CardText>
                            <CardText>"Piensa global, actúa local"</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <div style={{height: '200px', overflow: 'hidden'}}>
                            <CardImg top width='100%' src="/InubeBackEnd/public/cris.png" alt='Image 1'/>
                        </div>
                        <CardBody>
                            <CardTitle>Cristina Sánchez Enciso</CardTitle>
                            <CardText>Developer</CardText>
                            <CardText>"Elige la visión antes que el dinero"</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <div style={{height: '200px', overflow: 'hidden'}}>
                            <CardImg top width='100%' src="/InubeBackEnd/public/marcos.png" alt='Image 1'/>
                        </div>
                        <CardBody>
                            <CardTitle>Marcos Luna Garrido</CardTitle>
                            <div style={{height: '25px'}}></div>
                            <CardText>Developer</CardText>
                            <CardText>"La verdad solo se puede encontrar en un lugar; el código"</CardText>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default Who;
