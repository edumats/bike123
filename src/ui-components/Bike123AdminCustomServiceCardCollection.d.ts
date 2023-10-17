/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bike123AdminCustomServiceCardProps } from "./Bike123AdminCustomServiceCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123AdminCustomServiceCardCollectionOverridesProps = {
    Bike123AdminCustomServiceCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    Bike123AdminCustomServiceCard?: Bike123AdminCustomServiceCardProps;
} & EscapeHatchProps;
export declare type Bike123AdminCustomServiceCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Bike123AdminCustomServiceCardProps;
} & {
    overrides?: Bike123AdminCustomServiceCardCollectionOverridesProps | undefined | null;
}>;
export default function Bike123AdminCustomServiceCardCollection(props: Bike123AdminCustomServiceCardCollectionProps): React.ReactElement;
