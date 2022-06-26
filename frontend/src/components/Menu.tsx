import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  } from "@ionic/react";
import React, { useState } from "react";
import { withRouter } from 'react-router-dom';

  
const Menu = () => {

  const [isLoggedin, setIsLoggedin] = useState(false);

    const signout = () =>{
        localStorage.removeItem('token');
        setIsLoggedin(false);
    }

    return (
      <IonMenu type="overlay" contentId="menu" menuId="main" side="start">
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle>MENU</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
                <IonList>
              <IonItem button routerLink={"/home"} routerDirection="none">
                <IonLabel>Home</IonLabel>
              </IonItem><IonItem button routerLink={"/about"} routerDirection="none">
                  <IonLabel>About Us</IonLabel>
              </IonItem><IonItem button routerLink={"/services"} routerDirection="none">
                  <IonLabel>Services</IonLabel>
              </IonItem><IonItem button routerLink={"/contact"} routerDirection="none">
                  <IonLabel>Contact Us</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/login"} routerDirection="none">
                  <IonLabel onClick={signout}>
                    Logout
                  </IonLabel>
              </IonItem>
            </IonList>
        </IonContent>
      </IonMenu>
    );
  };

export default withRouter(Menu);