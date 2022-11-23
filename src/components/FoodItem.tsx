import { IonItem, IonLabel } from '@ionic/react';
import React from 'react';

type FoodItemProps = {
    name: string;
    id: string;
}

const FoodItem = ({ name, id }: FoodItemProps) => {

    return (
        <IonItem href={`/food/${id}`}>
            <IonLabel>{name}</IonLabel>
        </IonItem>
    );
};

export default FoodItem;