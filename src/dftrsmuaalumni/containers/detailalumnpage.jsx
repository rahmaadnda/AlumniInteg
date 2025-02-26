/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from "react-router";
import { HeaderContext } from "@/commons/components"

import ModifiedDetail from '../components/ModifiedDetail'
const detailalumnpage = props => {
const [isLoading, setIsLoading] = useState({
	modifiedDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const { id } = useParams()

	
	useEffect(() => {
		setTitle("detail alumn page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  kembalu
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Modified Detail"}
	singularName={"Detail"}
	items={{}}
	isLoading={isLoading.modifiedDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<ModifiedDetail {...{ data : {  }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default detailalumnpage

