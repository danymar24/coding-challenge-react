import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Food.css';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Nutrient from '../components/Nutrient';
import { heartOutline, heartSharp } from 'ionicons/icons';
import { addFavorite, removeFavorite } from '../store/features/food';

const FoodReport = () => {

    const { id } = useParams<{ id: string; }>();

    const items = useSelector((state: any = {}) => state.food?.items);
    const item = items.find((item: any) => `${item.fdcId}` === id);
    const isFavorite = useSelector((state: any = {}) => state.food.favorites).find((item: any) => `${item.fdcId}` === id);
    console.log(isFavorite)
    const dispatch = useDispatch();

    const handleFavoriteAdd = () => {
        console.log('adding')
        dispatch(addFavorite(item));
    }

    const handleFavoriteRemove = () => {
        dispatch(removeFavorite(item));
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                        {!isFavorite ?
                            (<IonButton onClick={handleFavoriteAdd}>
                                <IonIcon slot="start" icon={heartOutline}></IonIcon>
                            </IonButton>) : (<IonButton onClick={handleFavoriteRemove}>
                                <IonIcon slot="start" icon={heartSharp}></IonIcon>
                            </IonButton>)
                        }
                    </IonButtons>
                    <IonTitle>{item?.description}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {item?.foodNutrients?.map((nutrient: any) => <Nutrient key={nutrient.nutrientId} name={nutrient.nutrientName} value={nutrient.nutrientNumber} unit={nutrient.unitName} />)}
            </IonContent>
        </IonPage>
    );
};

export default FoodReport;
