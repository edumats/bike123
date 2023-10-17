/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123LargestNetworkOverridesProps = {
    Bike123LargestNetwork?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "A maior rede de t\u00E9cnicos de bike do Brasil"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123LargestNetworkProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123LargestNetworkOverridesProps | undefined | null;
}>;
export default function Bike123LargestNetwork(props: Bike123LargestNetworkProps): React.ReactElement;
