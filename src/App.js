import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { UserList, UserShow, UserCreate, UserEdit } from "./users";
import { Admin, Resource } from "react-admin";
import firebaseDataProvider from 'ra-data-firebase-client'

import firebase from 'firebase';
import UserIcon from '@material-ui/icons/People';

import { firebaseConfig } from './FIREBASE_CONFIG';
import CustomLoginPage from './CustomLoginPage';

firebase.initializeApp(firebaseConfig);

const settings = {context: 'dev', imagekey: "images", filekey: "files"}


const dataProvider = firebaseDataProvider(firebase, settings);

class App extends React.Component {
  render() {
    return (
      <Admin
        // loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        // authProvider={authProvider}
      >
   /*     <Resource
          name="posts"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />*/
        <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
      </Admin>
    );
  }
}

export default App;
