/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Bike123AdminServiceCardProps } from "./Bike123AdminServiceCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123AdminServiceCardCollectionOverridesProps = {
    Bike123AdminServiceCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    Bike123AdminServiceCard?: Bike123AdminServiceCardProps;
} & EscapeHatchProps;
export declare type Bike123AdminServiceCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Bike123AdminServiceCardProps;
} & {
    overrides?: Bike123AdminServiceCardCollectionOverridesProps | undefined | null;
}>;
export default function Bike123AdminServiceCardCollection(props: Bike123AdminServiceCardCollectionProps): React.ReactElement;
