import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonSearchbar, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import { getFoodData } from '../utils/api';
import './Food.css';
import { useParams } from 'react-router';

const FoodReport = () => {

    const { id } = useParams<{ id: string; }>();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [foodItem, setFoodItem] = useState<any[]>([]);

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
            </IonContent>
        </IonPage>
    );
};

export default FoodReport;
