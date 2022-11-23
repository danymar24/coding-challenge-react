import { IonButtons, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonSearchbar, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import FoodItem from '../components/FoodItem';
import { getFoodData } from '../utils/api';
import './Food.css';

const Food: React.FC = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [foodItems, setFoodItems] = useState<any[]>([]);

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
                setFoodItems(result.foods);
                console.log(result);
            }, error => {
                setIsLoading(false);
                setError(error);
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
                        {foodItems.map((item) => <FoodItem key={item.fdcId} name={item.description}></FoodItem>)}
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Food;
