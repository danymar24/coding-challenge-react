import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Food.css';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Nutrient from '../components/Nutrient';

const FoodReport = () => {

    const { id } = useParams<{ id: string; }>();

    const items = useSelector((state: any = {}) => state.food?.items);
    const item = items.find((item: any) => `${item.fdcId}` === id);
    console.log(item);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{item?.description}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {item?.foodNutrients?.map((nutrient: any) => <Nutrient name={nutrient.nutrientName} value={nutrient.nutrientNumber} unit={nutrient.unitName} />)}
            </IonContent>
        </IonPage>
    );
};

export default FoodReport;
