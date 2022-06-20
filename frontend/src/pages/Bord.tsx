import { IonContent, IonFooter, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import { Action } from '../components/utils/Action';
import { Wave } from '../components/utils/Wave';

function Board() {
  return (
    <>
        <IonPage>
            <IonContent class='container' style={style}>
                <div>
                    <div style={{background: '#ec3b43', borderRadius: '49px', height: '427px'}}>
                        <img src='/assets/images/logo.jpg' />
                    </div>
                    <IonRow className="ion-text-center ion-justify-content-center">
                        <p style={{ display: 'flex', justifyContent: 'center', padding:'14px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maxime recusandae quas sit sapiente accusantium amet. Ipsum quas,
                        </p>
                    </IonRow>
                </div>
                <Action message="" text="Signin" link="/login" />
            </IonContent>
            <IonFooter>
                <Wave/>
            </IonFooter>
        </IonPage>
    </>
  );
}

export default Board;


const style= {

    width: '100%',
    height: '100%',
    background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}
