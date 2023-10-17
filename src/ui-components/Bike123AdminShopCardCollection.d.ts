/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bike123AdminShopCardProps } from "./Bike123AdminShopCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123AdminShopCardCollectionOverridesProps = {
    Bike123AdminShopCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    Bike123AdminShopCard?: Bike123AdminShopCardProps;
} & EscapeHatchProps;
export declare type Bike123AdminShopCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Bike123AdminShopCardProps;
} & {
    overrides?: Bike123AdminShopCardCollectionOverridesProps | undefined | null;
}>;
export default function Bike123AdminShopCardCollection(props: Bike123AdminShopCardCollectionProps): React.ReactElement;
