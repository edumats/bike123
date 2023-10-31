/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Badge, Flex, Text } from "@aws-amplify/ui-react";
export default function Bike123AdminServiceCard(props) {
  const { servicoCard, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      padding="14px 19px 14px 19px"
      backgroundColor="rgba(239,240,240,1)"
      id={servicoCard?.id}
      {...getOverrideProps(overrides, "Bike123AdminServiceCard")}
      {...rest}
    >
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "Card Contents")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
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
          children={servicoCard?.cliente_nome}
          {...getOverrideProps(overrides, "CustomerName")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
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
          children={servicoCard?.createdAt}
          {...getOverrideProps(overrides, "ServiceAddedDate")}
        ></Text>
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="success"
          children={servicoCard?.cliente_telefone}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
      </Flex>
    </Flex>
  );
}
