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
                userName: 'admin',
                userEmail: 'admin@email.com',
                business: [
                    {
                        businessName: 'restaurante 1',
                        businessZipCode: '12345',
                        businessType: 'Restaurante',
                        businessPrice: '10',
                        tpvs: [
                            {
                                id: '1234567890',
                                iban: 'ES1234567890123456789000'
                            },
                            {
                                id: '0987654321',
                                iban: 'ES0987654321098765432111'
                            }
                        ]
                    },
                    {
                        businessName: 'cafetería 1',
                        businessZipCode: '67890',
                        businessType: 'Cafetería',
                        businessPrice: '5',
                        tpvs: [
                            {
                                id: '2468013579',
                                iban: 'ES1234567890098765432123'
                            },
                            {
                                id: '1357924680',
                                iban: 'ES0987654321123456789098'
                            }
                        ]
                    }
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
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <h1 className="text-info" style={{textAlign: 'center', marginTop: '1%'}}><FontAwesome name='cloud' /> iNube</h1>
                <Navigator onDismissLogIn={this.onDismissLogIn} logOutHandler={this.logOutHandler} isLogged={this.state.isLogged} logInFailed={this.state.logInFailed} toggleTab={this.toggleTab} logInHandler={this.logInHandler} registrationHandler={this.registrationHandler} editStep={this.state.editStep} stepEditHandler={this.stepEditHandler} stepEditSaltarHandler={this.stepEditSaltarHandler} activeTab={this.state.activeTab} userInfo={this.state.userInfo} acceptBusinessChanges={this.acceptBusinessChanges} addBusiness={this.addBusiness} changeLoginInfo={this.changeLoginInfo} addTPV={this.addTPV} deleteTPV={this.deleteTPV}/>
                <Footer/>
            </div>
        );
    }

    onDismissLogIn() {
        this.setState({
            logInFailed: false,
        });
    }

    deleteTPV(businessIndex, TPVindex) {
        let userInfo = this.state.userInfo;
        userInfo.business[businessIndex].tpvs.splice(TPVindex, 1);
        this.setState({
            userInfo: userInfo,
        });
    }

    addTPV(index, TPVdata) {
        let userInfo = this.state.userInfo;
        userInfo.business[index].tpvs.push({id: TPVdata[0], iban: TPVdata[1]});
        this.setState({
            userInfo: userInfo,
        });
    }

    addBusiness(business) {
        let userInfo = this.state.userInfo;
        userInfo.business.push({businessName: business[0], businessZipCode: business[1], businessType: business[2], businessPrice: business[3], tpvs: []});
        this.setState({
            userInfo: userInfo,
        });
    }

    acceptBusinessChanges(business) {
        let userInfo = this.state.userInfo;
        userInfo.business = business;
        console.log("Desde App: ", userInfo);
        this.setState({
            userInfo: userInfo,
        });
    }

    changeLoginInfo(userName, userEmail) {
        console.log("App: ", userName, userEmail);
        let userInfo = this.state.userInfo;
        userInfo.userName = userName;
        userInfo.userEmail = userEmail;
        this.setState({
            userInfo: userInfo,
        });
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
            console.log("ha fallado")
            this.setState({
                logInFailed: true,
            });
            console.log(this.state);
        }
    }

    registrationHandler(direction, regData) {
        // direction === 0 si se avanza
        // Mandar los datos de registro al servidor!!!!
        this.setState({
            isLogged: true,
            activeTab: '0',
        });
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
