/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import {
  Button,
  Flex,
  Text,
  TextAreaField,
  TextField,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function Bike123CustomServiceForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Header title": {},
        "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?":
          {},
        "Fale com a gente e tenha um or\u00E7amento sob medida": {},
        "Header explanation": {},
        "Contact Header": {},
        "Name Field": {},
        "E-mail Field": {},
        "Phone Field": {},
        "Message Field": {},
        "Send Message Button": {},
        Bike123CustomServiceForm: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Header title": {},
        "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?":
          {},
        "Fale com a gente e tenha um or\u00E7amento sob medida": {},
        "Header explanation": {},
        "Contact Header": {},
        "Name Field": {},
        "E-mail Field": {},
        "Phone Field": {},
        "Message Field": {},
        "Send Message Button": {},
        Bike123CustomServiceForm: {
          width: "360px",
          height: "827px",
          padding: "32px 10px 32px 10px",
        },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="column"
      width="823px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="32px 50px 32px 50px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123CustomServiceForm")}
      {...rest}
    >
      <Flex
        gap="9px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="19px 44px 19px 44px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "Contact Header")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="40px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Precisa de algo especial?"
          {...getOverrideProps(overrides, "Header title")}
        ></Text>
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="24px 0px 24px 0px"
          backgroundColor="rgba(0,0,0,0)"
          display="flex"
          {...getOverrideProps(overrides, "Header explanation")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sua bicicleta está com um barulho estranho? Está querendo trocar algo na bike?"
            {...getOverrideProps(
              overrides,
              "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Fale com a gente e tenha um orçamento sob medida"
            {...getOverrideProps(
              overrides,
              "Fale com a gente e tenha um or\u00E7amento sob medida"
            )}
          ></Text>
        </Flex>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Name Field")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "E-mail Field")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Phone Field")}
      ></TextField>
      <TextAreaField
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Message Field")}
      ></TextAreaField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        backgroundColor="rgba(235,146,51,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Enviar Mensagem"
        {...getOverrideProps(overrides, "Send Message Button")}
      ></Button>
    </Flex>
  );
}
