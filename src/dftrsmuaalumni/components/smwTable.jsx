/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const smwTable = ({ alumnidatalist

	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[alumnidatalist]}
  	  itemsAttrs={[
  	  ]}
        itemsEvents={(smwItem) => [
          <Link to=''>
            <Button
          	size="sm"
          	variant=
          				"secondary"
            >
              detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(smwItem) => [
        ]}
  	/>
  )
};

export default smwTable;
