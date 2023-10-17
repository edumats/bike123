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
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Bike123AdminNavBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Bike123: {}, Button: {}, Bike123AdminNavBar: {} },
      variantValues: { logged: "true" },
    },
    {
      overrides: {
        Bike123: {},
        Button: { display: "none" },
        Bike123AdminNavBar: { justifyContent: "flex-start" },
      },
      variantValues: { logged: "false" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const bikeOneTwoThreeOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="30px"
      direction="row"
      width="603px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123AdminNavBar")}
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
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Deslogar"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
