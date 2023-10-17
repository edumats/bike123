/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ServicoCustomizado } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123AdminCustomServiceCardOverridesProps = {
    Bike123AdminCustomServiceCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Contents"?: PrimitiveOverrideProps<FlexProps>;
    CustomerName?: PrimitiveOverrideProps<TextProps>;
    ServiceAddedDate?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123AdminCustomServiceCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    servicoCustomizado?: ServicoCustomizado;
} & {
    overrides?: Bike123AdminCustomServiceCardOverridesProps | undefined | null;
}>;
export default function Bike123AdminCustomServiceCard(props: Bike123AdminCustomServiceCardProps): React.ReactElement;
