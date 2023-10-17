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
export default function Bike123HandsPros(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Sua bicicleta nas m\u00E3os de especialistas": {},
        "Economize tempo e pedale mais": {},
        "Main Body": {},
        "Type Lock Up": {},
        Bike123HandsPros: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Sua bicicleta nas m\u00E3os de especialistas": {
          fontSize: "24px",
          lineHeight: "30px",
        },
        "Economize tempo e pedale mais": {
          fontSize: "24px",
          lineHeight: "30px",
        },
        "Main Body": {},
        "Type Lock Up": {},
        Bike123HandsPros: { width: "360px", padding: "0px 0px 0px 0px" },
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
      gap="10px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 106px 160px 106px"
      backgroundColor="rgba(0,187,230,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123HandsPros")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="228px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
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
            children="Sua bicicleta nas mãos de especialistas"
            {...getOverrideProps(
              overrides,
              "Sua bicicleta nas m\u00E3os de especialistas"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="48px"
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
            children="Economize tempo e pedale mais"
            {...getOverrideProps(overrides, "Economize tempo e pedale mais")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
