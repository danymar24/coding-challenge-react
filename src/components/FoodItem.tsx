import { IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';

type FoodItemProps = {
    name: string;
    id: string;
}

const FoodItem = ({ name, id }: FoodItemProps) => {
    const history = useHistory();
    const handleSelectItem = () => {
        history.push(`/food/${id}`);
    }

    return (
        <IonItem button onClick={handleSelectItem}>
            <IonLabel>{name}</IonLabel>
        </IonItem>
    );
};

export default FoodItem;