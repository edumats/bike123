/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123CustomServiceFormOverridesProps = {
    Bike123CustomServiceForm?: PrimitiveOverrideProps<FlexProps>;
    "Contact Header"?: PrimitiveOverrideProps<FlexProps>;
    "Header title"?: PrimitiveOverrideProps<TextProps>;
    "Header explanation"?: PrimitiveOverrideProps<FlexProps>;
    "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?"?: PrimitiveOverrideProps<TextProps>;
    "Fale com a gente e tenha um or\u00E7amento sob medida"?: PrimitiveOverrideProps<TextProps>;
    "Name Field"?: PrimitiveOverrideProps<TextFieldProps>;
    "E-mail Field"?: PrimitiveOverrideProps<TextFieldProps>;
    "Phone Field"?: PrimitiveOverrideProps<TextFieldProps>;
    "Message Field"?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Send Message Button"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Bike123CustomServiceFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123CustomServiceFormOverridesProps | undefined | null;
}>;
export default function Bike123CustomServiceForm(props: Bike123CustomServiceFormProps): React.ReactElement;
