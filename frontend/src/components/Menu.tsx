import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
  } from "@ionic/react";
import React from "react";
import { withRouter } from 'react-router-dom';

  
const Menu = () => {
    return (
      <IonMenu type="overlay" contentId="menu" menuId="main" side="start">
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle>MENU</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/home"} routerDirection="none">
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/about"} routerDirection="none">
                <IonLabel>About Us</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/services"} routerDirection="none">
                <IonLabel>Services</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };

export default withRouter(Menu);