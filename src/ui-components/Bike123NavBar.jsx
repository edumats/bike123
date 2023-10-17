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
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function Bike123NavBar(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Bike123: {},
        Sobre: {},
        Products: {},
        Pricing: {},
        Contact: {},
        Contato: {},
        "Menu Items": { display: "flex" },
        Bike123NavBar: { width: "796px" },
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Bike123: {},
        Sobre: {},
        Products: {},
        Pricing: {},
        Contact: {},
        Contato: {},
        "Menu Items": {},
        Bike123NavBar: {},
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
  const bikeOneTwoThreeOnClick = useNavigateAction({ type: "url", url: "/" });
  const sobreOnClick = useNavigateAction({ anchor: "#sobre", type: "anchor" });
  const productsOnClick = useNavigateAction({
    anchor: "#clientes",
    type: "anchor",
  });
  const pricingOnClick = useNavigateAction({
    anchor: "#servicos",
    type: "anchor",
  });
  const contactOnClick = useNavigateAction({
    anchor: "#midia",
    type: "anchor",
  });
  const contatoOnClick = useNavigateAction({
    anchor: "#contato",
    type: "anchor",
  });
  return (
    <Flex
      gap="30px"
      direction="row"
      width="360px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123NavBar")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(51,201,235,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="98px"
        height="31px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Bike123"
        onClick={() => {
          bikeOneTwoThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Bike123")}
      ></Text>
      <Flex
        gap="23px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="none"
        {...getOverrideProps(overrides, "Menu Items")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sobre"
          onClick={() => {
            sobreOnClick();
          }}
          {...getOverrideProps(overrides, "Sobre")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="O que dizem nossos clientes"
          onClick={() => {
            productsOnClick();
          }}
          {...getOverrideProps(overrides, "Products")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Serviços"
          onClick={() => {
            pricingOnClick();
          }}
          {...getOverrideProps(overrides, "Pricing")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Mídia"
          onClick={() => {
            contactOnClick();
          }}
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contato"
          onClick={() => {
            contatoOnClick();
          }}
          {...getOverrideProps(overrides, "Contato")}
        ></Text>
      </Flex>
    </Flex>
  );
}
