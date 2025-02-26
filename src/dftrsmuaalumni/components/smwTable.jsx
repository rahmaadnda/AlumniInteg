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

const smwTable = ({ tahunLulusSelectionField, alumnidatalist

	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[tahunLulusSelectionField, alumnidatalist]}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Tahun Lulus",
  	      featureName: "tahunLulus",
  	      options: tahunLulusSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  ,
  		{
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "nama",
  		}
  ,
  		{
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
            featureName: "npm",
  		}
  ,
  		{
            id: "tahunLulus",
            condition: "isHeading",
            label: "Tahun Lulus",
            featureName: "tahunLulus",
  		}
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
