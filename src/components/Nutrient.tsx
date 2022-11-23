import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';

type NutrientProps = {
    name: string,
    value: string,
    unit: string
}

const Nutrient = ({
    name,
    value,
    unit,
}: NutrientProps) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{name}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {`${value} ${unit}`}
            </IonCardContent>
        </IonCard>
    );
};

export default Nutrient;