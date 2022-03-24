import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import NavButton from '../components/NavButton';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
            <IonButtons slot="end">
              <NavButton/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
            <h1>heyyy</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
