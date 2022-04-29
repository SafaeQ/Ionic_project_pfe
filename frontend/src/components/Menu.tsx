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
              <IonItem button routerLink={"/page-1"} routerDirection="none">
                <IonLabel>Page One</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/page-2"} routerDirection="none">
                <IonLabel>Page Two</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };

export default withRouter(Menu);