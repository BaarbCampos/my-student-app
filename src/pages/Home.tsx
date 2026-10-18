
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/react';

import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Ready to study');
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    console.log('Student App loaded');
  }, []);

  useEffect(() => {
    console.log('Study sessions:', count);
  }, [count]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Student App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h1>Welcome</h1>

        <p>Welcome to my first Ionic application.</p>

        <p>{message}</p>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>My Studies</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
           <IonButton onClick={() => setMessage('Your study session has started!')}>
               Start Studying
          </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Study Tracker</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>
              Study Sessions: <IonBadge>{count}</IonBadge>
            </p>

            <IonButton onClick={() => setCount(count + 1)}>
              Add Session
            </IonButton>

            <IonButton
              fill="outline"
              onClick={() => {
                setCount(0);
                setMessage('Ready to study');
              }}
            >
              Reset
            </IonButton>

            <IonButton onClick={() => setMessage('You can do it! Keep learning!')}>
              Motivate Me
            </IonButton>

            <IonList>
              <IonItem>
                <IonLabel>Mobile Development</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Web Development</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Database Systems</IonLabel>
              </IonItem>
            </IonList>

            <IonButton onClick={() => setShowTip(!showTip)}>
              Show / Hide Study Tip
            </IonButton>

            {showTip && (
              <p>Study for 25 minutes and then take a short break.</p>
            )}

            {count > 3 && <p>Excellent progress!</p>}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
