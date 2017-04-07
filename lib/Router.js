import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import MapShow from './components/map/map';
import PhotoIndex from './components/photo/photo_index';
import Camera from './components/camera';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, flex: 1, height: '100%', width: '100%' }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main" initial>
        <Scene
          onRight={() => Actions.camera()}
          rightTitle="Upload"
          key="map"
          component={MapShow}
          title="Map" />
        <Scene key="photoIndex" component={PhotoIndex} title="Photo" />

      <Scene key="camera" component={Camera} title="Upload Photo" />

      </Scene>
    </Router>
  );
};

export default RouterComponent;