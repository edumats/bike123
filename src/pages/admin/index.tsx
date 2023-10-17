import React, { useState } from "react";

import { 
  Bike123AdminNavBar, 
  Bike123AdminServiceCardCollection, 
  Bike123AdminCustomServiceCardCollection,
  Bike123AdminMechanicCardCollection,
  Bike123AdminShopCardCollection,
  Bike123AdminSideBar,
  ServicoUpdateForm,
} from "@/ui-components";


export default function AdminPage() {
  const [page, setPage] = useState<keyof ContentTypes>('servicos');
  const [cardId, setCardId] = useState('')

  // Type definition
  interface ContentTypes {
    'servicos': React.ReactNode,
    'customizados': React.ReactNode,
    'lojistas': React.ReactNode,
    'mecanicos': React.ReactNode,
    'detalhesServicos': React.ReactNode,
  }

  // Object that holds elements to be displayed as content
  const contentToDisplay: ContentTypes = {
    'servicos': <Bike123AdminServiceCardCollection
                  className="col-span-3 my-6 mx-auto"
                  overrideItems={
                    ({ item, index }) => {
                      return {
                        overrides: {
                          onClick: () => {
                            setCardId(item.id)
                            setPage('detalhesServicos')
                          }
                        }
                      }
                    }
                  } 
                />,
    'customizados': <Bike123AdminCustomServiceCardCollection className="col-span-3 my-6 mx-auto" />,
    'lojistas': <Bike123AdminShopCardCollection className="col-span-3 my-6 mx-auto" />,
    'mecanicos': <Bike123AdminMechanicCardCollection className="col-span-3 my-6 mx-auto" />,
    'detalhesServicos': <ServicoUpdateForm id={cardId} />,
  }

  // Styling overrides for Admin Navbar
  const navBarOverrides = {
    'Bike123AdminNavBar': {
      boxShadow: 'none',
    },
    'Bike123': {
      style: { cursor: 'pointer'},
    },
  }

  // Sidebar funcionality override
  const sidebarOverrides = {
    'Servicos': {
      onClick: () => setPage('servicos')
    },
    'Servicos Customizados': {
      onClick: () => setPage('customizados')
    },
    'Lojistas': {
      onClick: () => setPage('lojistas')
    },
    'Mecanicos': {
      onClick: () => setPage('mecanicos')
    }
  }

    return (
        <div className="h-full">
          <Bike123AdminNavBar width={"100%"} overrides={navBarOverrides} />
          <section className="grid grid-cols-4 bg-blue-300 min-h-full">
            <Bike123AdminSideBar height={"100%"} className="col-span-1" overrides={sidebarOverrides} />
            {contentToDisplay[page]}
          </section>
        </div>

    )
}