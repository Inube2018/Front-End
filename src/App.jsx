import React from 'react';
import Navigator from './Navigator.jsx';
import Footer from './Footer.jsx';
import './assets/main.scss';
var FontAwesome = require('react-fontawesome');


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            activeTab: '0',
            regUserName: '',
            regEmail: '',
            regPassword: '',
            regIban: '',
            logInFailed: false,
            editStep: 0,
            userInfo: {
                userId: 0,
                userName: 'admin',
                userEmail: 'admin@email.com',
                business: [
                    {
                        businessId: 0,
                        businessName: 'restaurante 1',
                        businessZipCode: '12345',
                        businessType: 'Restaurante',
                        businessPrice: '10',
                        tpvs: [
                            {
                                id: '1234567890',
                                iban: 'ES1234567890123456789000',
                                tpvId: '',
                            },
                            {
                                id: '0987654321',
                                iban: 'ES0987654321098765432111',
                                tpvId: '',
                            }
                        ]
                    },
                    {
                        businessId: 0,
                        businessName: 'cafetería 1',
                        businessZipCode: '67890',
                        businessType: 'Cafetería',
                        businessPrice: '5',
                        tpvs: [
                            {
                                id: '2468013579',
                                iban: 'ES1234567890098765432123',
                                tpvId: '',
                            },
                            {
                                id: '1357924680',
                                iban: 'ES0987654321123456789098',
                                tpvId: '',
                            }
                        ]
                    },
                ],
            }
        };
        this.toggleTab = this.toggleTab.bind(this);
        this.logInHandler = this.logInHandler.bind(this);
        this.registrationHandler = this.registrationHandler.bind(this);
        this.stepEditHandler = this.stepEditHandler.bind(this);
        this.stepEditSaltarHandler = this.stepEditSaltarHandler.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
        this.acceptBusinessChanges = this.acceptBusinessChanges.bind(this);
        this.addBusiness = this.addBusiness.bind(this);
        this.changeLoginInfo = this.changeLoginInfo.bind(this);
        this.addTPV = this.addTPV.bind(this);
        this.deleteTPV = this.deleteTPV.bind(this);
        this.onDismissLogIn = this.onDismissLogIn.bind(this);
        this.getBusiness = this.getBusiness.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <h1 className="text-info" style={{textAlign: 'center', marginTop: '1%'}}><FontAwesome name='cloud' /> iNube</h1>
                <Navigator changePassword={this.changePassword} getBusiness={this.getBusiness} onDismissLogIn={this.onDismissLogIn} logOutHandler={this.logOutHandler} isLogged={this.state.isLogged} logInFailed={this.state.logInFailed} toggleTab={this.toggleTab} logInHandler={this.logInHandler} registrationHandler={this.registrationHandler} editStep={this.state.editStep} stepEditHandler={this.stepEditHandler} stepEditSaltarHandler={this.stepEditSaltarHandler} activeTab={this.state.activeTab} userInfo={this.state.userInfo} acceptBusinessChanges={this.acceptBusinessChanges} addBusiness={this.addBusiness} changeLoginInfo={this.changeLoginInfo} addTPV={this.addTPV} deleteTPV={this.deleteTPV}/>
                <Footer/>
            </div>
        );
    }

    changePassword(oldPassword, newPassword) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
            }
        }.bind(this);
        req.open('POST', 'http://localhost:8080/InubeBackEnd/UpdatePasswordServlet', true);
        let body = '{\"userId\": '+this.state.userInfo.userId+', \"oldPass\": '+oldPassword+', \"newPass\": '+newPassword+'}';
        req.send(body);
    }

    getBusiness() {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
                let userInfo = this.state.userInfo;
                userInfo.business = JSON.parse(req.response);
                this.setState({
                    userInfo: userInfo,
                })
            }
        }.bind(this);
        req.open('GET', 'http://localhost:8080/InubeBackEnd/BusinessByUserServlet', true);
        req.setRequestHeader('userId', this.state.userInfo.userId);
        req.send(null);
    }

    onDismissLogIn() {
        this.setState({
            logInFailed: false,
        });
    }

    deleteTPV(businessIndex, TPVindex) {
        let userInfo = this.state.userInfo;
        userInfo.business[businessIndex].tpvs.splice(TPVindex, 1);
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            console.log(req.response);
            this.setState({
                userInfo: userInfo,
            });
        }.bind(this);
        req.open('GET', 'http://localhost:8080/InubeBackEnd/DeleteTpvServlet', true);
        req.setRequestHeader('tpvId', this.state.userInfo.business[businessIndex].tpvs[TPVindex].id);
        req.send(null);
    }

    addTPV(index, TPVdata) {
        let userInfo = this.state.userInfo;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
                userInfo.business[index].tpvs.push({id: JSON.parse(req.response).id, iban: TPVdata[1], tpvId: TPVdata[0]});
                this.setState({
                    userInfo: userInfo,
                });
            }
        }.bind(this);
        req.open('POST', 'http://localhost:8080/InubeBackEnd/RegisterTpvServlet', true);
        req.setRequestHeader('Content-Type', 'application/json');
        let body = '{\"businessId\": '+this.state.userInfo.business[index].businessId+', \"tpvId\": '+TPVdata[0]+', \"iban\": '+TPVdata[1]+'}';
        req.send(body);
    }

    addBusiness(business) {
        let userInfo = this.state.userInfo;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
                //Hacer algo!!
                //Por ejemplo actualizar el estado con el id del business generado
            }
        }.bind(this);
        req.open('POST', 'http://localhost:8080/InubeBackEnd/RegisterRestaurantServlet', true);
        req.setRequestHeader('Content-Type', 'application/json');
        let body = '{\"userId\": '+this.state.userInfo.userId+', \"businessName\": '+business[0]+', \"businessZipCode\": '+business[1]+', \"businessType\": '+business[2]+', \"businessPrice\": '+business[3]+'}';
        req.send(body);
        userInfo.business.push({businessName: business[0], businessZipCode: business[1], businessType: business[2], businessPrice: business[3], tpvs: []});
        this.setState({
            userInfo: userInfo,
        });
    }

    acceptBusinessChanges(editData, index) {
        let userInfo = this.state.userInfo;
        let business = userInfo.business;
        let businessId = business[index].businessId;
        business[index].businessName = editData[0];
        business[index].businessZipCode = editData[1];
        business[index].businessType = editData[2];
        business[index].businessPrice = editData[3];
        userInfo.business = business;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
            }
        }.bind(this);
        req.open('POST', 'http://localhost:8080/InubeBackEnd/UpdateRestaurantServlet', true);
        req.setRequestHeader('Content-Type', 'application/json');
        let body = '{\"businessId\": '+business[index].businessId+', \"businessName\": '+editData[0]+', \"businessZipCode\": '+editData[1]+', \"businessType\": '+editData[2]+', \"businessPrice\": '+editData[3]+'}'
        req.send(body);
        console.log("Desde App: ", userInfo);
        this.setState({
            userInfo: userInfo,
        });
    }

    changeLoginInfo(userName, userEmail) {
        //Update!!
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
                //Hacer algo con el resultado!!!
                let userInfo = this.state.userInfo;
                userInfo.userName = userName;
                userInfo.userEmail = userEmail;
                this.setState({
                    userInfo: userInfo,
                });
            }
        }.bind(this);
        req.open('POST', 'http://localhost:8080/InubeBackEnd/UpdateUserServlet', true);
        req.setRequestHeader('Content-Type', 'application/json');
        let body = '{\"id\": '+this.state.userInfo.userId+', \"name\": '+userName+', \"mail\": '+userEmail+'}';
        req.send(body);
        console.log("App: ", userName, userEmail);
    }

    logOutHandler(logOut) {
        if (logOut) {
            this.setState({
                isLogged: false,
                activeTab: '0',
            });
        } else {
            this.setState({
                activeTab: '0'
            })
        }
    }

    toggleTab(tab) {
        console.log(this.state);
        this.setState({
            activeTab: tab
        });
    }

    logInHandler(email, password) {
        if ((email === "admin") && (password === "1234")) {
            this.setState({
                isLogged: !this.state.isLogged,
                logInFailed: false,
                activeTab: '0',
            });
        } else {
            var req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (req.readyState == 4 && req.status == 200) {
                    console.log(req.response);
                    let jsonResponse = JSON.parse(req.response);
                    if (jsonResponse.login === 'ok') {
                        let userInfo = this.state.userInfo;
                        userInfo.userId = jsonResponse.user.id;
                        userInfo.userName = jsonResponse.user.name;
                        userInfo.userEmail = jsonResponse.user.mail;
                        this.setState({
                            isLogged: !this.state.isLogged,
                            logInFailed: false,
                            activeTab: '0',
                            userInfo: userInfo,
                        });
                    }
                }
            }.bind(this);
            req.open('GET', 'http://localhost:8080/InubeBackEnd/LoginServlet', true);
            req.setRequestHeader("user", email);
            req.setRequestHeader("password", password);
            req.send(null);
            //fetch('http://localhost:8080/ServidorISST/LoginServlet', {
            //    method: 'GET',
            //    headers: headers
            //}).then(function(response){
            //    console.log(response);
            //});
            //console.log("ha fallado")
            //this.setState({
            //    logInFailed: true,
            //});
            //console.log(this.state);
        }
    }

    registrationHandler(direction, regData) {
        // direction === 0 si se avanza
        // Mandar los datos de registro al servidor!!!!
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
                let jsonResponse = JSON.parse(req.response); 
                let userInfo = this.state.userInfo;
                userInfo.userId = jsonResponse.id;
                userInfo.userName = regData[0];
                userInfo.userEmail = regData[1];
                this.setState({
                    isLogged: true,
                    activeTab: '0',
                    userInfo: userInfo,
                });
                //Hacer algo para mostrar el resultado del post
                //P.ej: settear aquí el estado y que si la respuesta está bien
                //devuelva un id != 0.
            }
        }.bind(this);
        req.open('POST', 'http://localhost:8080/InubeBackEnd/RegistrationServlet', true);
        req.setRequestHeader('Content-type', 'application/json');
        //'{\"id\": '+this.state.userInfo.userId+', \"name\": '+userName+', \"mail\": '+userEmail+'}';
        let body = '{\"name\": '+regData[0]+', \"mail\": '+regData[1]+', \"password\": '+regData[2]+'}';
        req.send(body);
    }

    stepEditHandler(direction, editData) {
        if (direction === 0) {
            console.log(editData);
            if (this.state.editStep === 0) {
                this.setState({
                    editStep: this.state.editStep+1,
                    editUserName: editData[0],
                    editEmail: editData[1],
                    editPassword: editData[2],
                });
            } else if (this.state.editStep === 1) {
                this.setState({
                    editStep: this.state.editStep+1,
                    editRestaurantName: editData[0],
                    editZipCode: editData[1],
                    editBusinessType: editData[2],
                    editAverageSell: editData[2],
                });
            } else if (this.state.editStep === 2) {
                this.setState({
                    editStep: 0,
                    editIban: editData[0],
                    isLogged: true,
                    activeTab: '0'
                });
            }

        }
           else {
            this.setState({
                editStep: this.state.editStep-1,
            });

        }

    }

    stepEditSaltarHandler(direction, editData2) {
        if (direction === 0) {
            console.log(editData2);
            if (this.state.editStep === 0) {
                this.setState({
                    editStep: this.state.editStep+1,

                });
            } else if (this.state.editStep === 1) {
                this.setState({
                    editStep: this.state.editStep+1,

                });
            } else if (this.state.editStep === 2) {
                this.setState({
                    editStep: 0,
                    isLogged: true,
                    activeTab: '0'
                });
            }

        }
           else {
            this.setState({
                editStep: this.state.editStep-1,
            });

        }

    }

}
export default App;
