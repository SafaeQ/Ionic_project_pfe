import { IonContent } from '@ionic/react';
import React from 'react';

function Board() {
  return (
    <>
        <IonContent class='container' style={style}>
            <h1>Bord</h1>
            <div>
                <img src='../../public/assets/images/logo.jpg' style={{ width:'12px' }}/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae quas sit sapiente accusantium amet. Ipsum quas, similique qui numquam ea praesentium fuga, eligendi debitis magnam enim assumenda iure earum.
                </p>
            </div>
        </IonContent>
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
