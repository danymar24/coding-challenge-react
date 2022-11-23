import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonSearchbar, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import FoodItem from '../components/FoodItem';
import { useSelector } from 'react-redux';

const Favorites: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const favoriteItems = useSelector((state: any = {}) => state.food?.favorites);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Food</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {isLoading && (
                    <div className="loadingSpinner">
                        <IonSpinner></IonSpinner>
                    </div>
                )}
                {favoriteItems && (
                    <IonList>
                        {favoriteItems.map((item: any) => <FoodItem key={item.fdcId} name={item.description} id={item.fdcId}></FoodItem>)}
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Favorites;
