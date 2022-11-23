import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonSearchbar, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import FoodItem from '../components/FoodItem';
import { getFoodData } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';

import './Food.css';
import { changeValue } from '../store/features/food';

const Food: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const foodItems = useSelector((state: any = {}) => state.food?.value);

    const dispatch = useDispatch();

    /**
     * Retrieves the food data from the api when the search bar value changes
     * Sets the retrieved data to the state variables
     * 
     * @param event IonSearchbar event
     */
    const handleQueryChange = (event: Event) => {
        setIsLoading(true);

        let query = "";
        const target = event.target as HTMLIonSearchbarElement;

        if (target) query = target.value!.toLowerCase();

        getFoodData(query)
            .then(res => res.json())
            .then(result => {
                setIsLoading(false);
                dispatch(changeValue(result.foods));
                console.log(result);
            }, error => {
                setIsLoading(false);
                console.log(error);
            })
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Food</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar
                        animated={true}
                        placeholder="Search for food"
                        onIonChange={(ev) => handleQueryChange(ev)}
                    ></IonSearchbar>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {isLoading && (
                    <div className="loadingSpinner">
                        <IonSpinner></IonSpinner>
                    </div>
                )}
                {foodItems && (
                    <IonList>
                        {foodItems.map((item: any) => <FoodItem key={item.fdcId} name={item.description} id={item.fdcId}></FoodItem>)}
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Food;
