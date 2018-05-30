import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500,red500,greenA200} from 'material-ui/styles/colors';
import UploadScreen from '../src/UploadScreen';
//import LoginScreen from './Loginscreen'

class App extends Component{
    constructor(props){
        super(props);
        this.state ={draweropen: false, currentScreen:[]};

    }
    componentDidMount(){
        var currentScreen=[];
        currentScreen.push(<UploadScreen appContext={this.props.appContext}role={this.props.role}/>);
        this.setState({currentScreen})
    }

    toggleDrawer(event){
        this.setState({draweropen: !this.state.draweropen})
    }
    handleMenuClick(event,page){
        switch(page){
            case "openprint":

            var currentScreen=[];
            currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
            this.setState({currentScreen})
            break;
           
        }
        this.setState({draweropen:false})
    }
    render() {
        return (
          <div className="App">
            <MuiThemeProvider>
              <AppBar
                title="Printing Page"
                onLeftIconButtonTouchTap={(event) => this.toggleDrawer(event)}
              />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <Drawer open={this.state.draweropen}>
                <MenuItem>
                  <div>
                  User Profile
                  <a href="#"><FontIcon
                    className="material-icons drawerclosebutton"
                    color={blue500}
                    styles={{ top:10,}}
                    onClick={(event) => this.toggleDrawer(event)}
                  >clear</FontIcon></a>
                  </div>
                </MenuItem>
                  <div>
                  <MenuItem onClick={(event) => this.handleMenuClick(event,"openprint")}>
                      Printing Page
                  </MenuItem>
                  {/* <MenuItem onClick={(event) => this.handleMenuClick(event,"openpast")}>
                      Past Files
                  </MenuItem>
                   */}
                  </div> 
              </Drawer>
            </MuiThemeProvider>
            <div>
              {this.state.currentScreen}
            </div>
          </div>
        );
    }
}
export default App;