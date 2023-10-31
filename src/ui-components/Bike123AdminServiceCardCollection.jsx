/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Servico } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Bike123AdminServiceCard from "./Bike123AdminServiceCard";
import { Collection } from "@aws-amplify/ui-react";
export default function Bike123AdminServiceCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.createdAt(SortDirection.DESCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Servico,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Buscar serviço"
      itemsPerPage={6}
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "Bike123AdminServiceCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <Bike123AdminServiceCard
          servicoCard={item}
          margin="0px 0px 0px 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Bike123AdminServiceCard>
      )}
    </Collection>
  );
}
