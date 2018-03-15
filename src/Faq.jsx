import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


class Faq extends React.Component {
   
    constructor(props) {
      super(props);
      this.toggle1 = this.toggle1.bind(this);
      this.toggle2 = this.toggle2.bind(this);
      this.toggle3 = this.toggle3.bind(this);
      this.toggle4 = this.toggle4.bind(this);
      this.state = { 
          collapse1: false,
          collapse2: false,
          collapse3: false,
          collapse4: false,
          collapse5: false,
        };
    }
  
    toggle1() {
        this.setState({ collapse1: !this.state.collapse1 });
    }
    toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
    }
    toggle3() {
        this.setState({ collapse3: !this.state.collapse3 });
    }
    toggle4() {
        this.setState({ collapse4: !this.state.collapse4 });
    }
    toggle5() {
        this.setState({ collapse5: !this.state.collapse5 });
    }
   
    render() {
      return (
        <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
            
            <Button color="white" onClick={this.toggle1} style={{ textAlign: 'left', marginBottom: '1rem', fontWeight: "bold" }}>¿A qué tipo de contenido tengo acceso como usuario premium?</Button>
            <Collapse isOpen={this.state.collapse1}>
                <Card>
                <CardBody>
                    Tener una cuenta premium te permitirá comparar los datos de tu negocio con los de la competencia de la zona en la que este ubicada tu establecimiento, elegir entre distintas configuraciones del dashboard y gráficas que te ayudarán a analizar y visualizar mejor la evolución de tu negocio.  
                </CardBody>
                </Card>
            </Collapse>
           
            <Button color="white" onClick={this.toggle2} style={{ textAlign: 'left', marginBottom: '1rem', fontWeight: "bold" }}>¿Con qué bancos trabajais?</Button>
            <Collapse isOpen={this.state.collapse2}>
                <Card>
                <CardBody>
                    Inube no tiene ninguna restricción según el banco con el que gestiones tu negocio, independientemente de tu banco podrás registrar tu negocio.
                </CardBody>
                </Card>
            </Collapse>
           
            <Button color="white" onClick={this.toggle3} style={{ textAlign: 'left', marginBottom: '1rem', fontWeight: "bold" }}>¿Si os doy permiso para acceder a los datos bancarios de mi negocio, significa eso que teneís acceso a mi cuenta corriente?</Button>
            <Collapse isOpen={this.state.collapse3}>
                <Card>
                <CardBody>
                    En Inube nos tomamos muy en serio la integridad y confidencialidad de tus datos bancarios por lo que solo accedemos a tus datos en modo lectura. Esto significa que solo podemos interpretarlos y representarlos en nuestra aplicación pero bajo ningún concepto podemos 
                </CardBody>
                </Card>
            </Collapse>
            
            <Button color="white" onClick={this.toggle4} style={{ textAlign: 'left', marginBottom: '1rem', fontWeight: "bold" }}>¿Para quién esta dirigida esta aplicación?</Button>
            <Collapse isOpen={this.state.collapse4}>
                <Card>
                <CardBody>
                    Inube esta enfocada a ayudar a pequeños negocios, comercios o establecimientos a la hora de analizar la información que generan así como para compararla con la de la competencia con el fin de ayudarles a tomar mejores decisiones de negocio.
                </CardBody>
                </Card>
            </Collapse>

            <Button color="white" onClick={this.toggle5} style={{ textAlign: 'left', marginBottom: '1rem', fontWeight: "bold" }}>¿?</Button>
            <Collapse isOpen={this.state.collapse5}>
                <Card>
                <CardBody>
                   
                </CardBody>
                </Card>
            </Collapse>


        </div>
      );
    }
  }

export default Faq;