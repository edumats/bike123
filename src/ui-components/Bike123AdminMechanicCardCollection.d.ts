/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bike123AdminMechanicCardProps } from "./Bike123AdminMechanicCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123AdminMechanicCardCollectionOverridesProps = {
    Bike123AdminMechanicCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    Bike123AdminMechanicCard?: Bike123AdminMechanicCardProps;
} & EscapeHatchProps;
export declare type Bike123AdminMechanicCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Bike123AdminMechanicCardProps;
} & {
    overrides?: Bike123AdminMechanicCardCollectionOverridesProps | undefined | null;
}>;
export default function Bike123AdminMechanicCardCollection(props: Bike123AdminMechanicCardCollectionProps): React.ReactElement;
