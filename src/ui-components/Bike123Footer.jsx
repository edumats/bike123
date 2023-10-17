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
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function Bike123Footer(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Bike123: {},
        "\u00A9 Copyright 2023. CNPJ 27.631.651/0001-36 BIKE123 TECNOLOGIA LTDA":
          {},
        "Frame 433": {},
        Bike123Footer: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Bike123: { height: "31px" },
        "\u00A9 Copyright 2023. CNPJ 27.631.651/0001-36 BIKE123 TECNOLOGIA LTDA":
          {},
        "Frame 433": {},
        Bike123Footer: {
          width: "360px",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "40px 40px 40px 40px",
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
      gap="32px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="80px 40px 10px 40px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123Footer")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(51,201,235,1)"
          lineHeight="30px"
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
          children="Bike123"
          {...getOverrideProps(overrides, "Bike123")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
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
          children=" © Copyright 2023. CNPJ 27.631.651/0001-36 BIKE123 TECNOLOGIA LTDA                "
          {...getOverrideProps(
            overrides,
            "\u00A9 Copyright 2023. CNPJ 27.631.651/0001-36 BIKE123 TECNOLOGIA LTDA"
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
