/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Bike123AdminSideBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="29px"
      direction="column"
      width="unset"
      height="307px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="20px 0px 60px 0px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "Bike123AdminSideBar")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="link"
        children="Serviços"
        {...getOverrideProps(overrides, "Servicos")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="link"
        children="Serviços Custom"
        {...getOverrideProps(overrides, "Servicos Customizados")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="link"
        children="Lojistas"
        {...getOverrideProps(overrides, "Lojistas")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="link"
        children="Mecânicos"
        {...getOverrideProps(overrides, "Mecanicos")}
      ></Button>
    </Flex>
  );
}
