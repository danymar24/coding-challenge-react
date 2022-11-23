import { IonItem, IonLabel } from '@ionic/react';
import React from 'react';

type FoodItemProps = {
    name: string;
}

const FoodItem = ({ name }: FoodItemProps) => {
    return (
        <IonItem>
            <IonLabel>{name}</IonLabel>
        </IonItem>
    );
};

export default FoodItem;