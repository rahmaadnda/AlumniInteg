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

import DetailAlumni from '../components/DetailAlumni'
import DetailAlumni1 from '../components/DetailAlumni1'
const DetailAlumniPage = props => {
const [isLoading, setIsLoading] = useState({
	detailAlumni: false,
	detailAlumni1: false,

	});
	const { setTitle } = useContext(HeaderContext);

const { id } = useParams()
const { id1 } = useParams()

	
	useEffect(() => {
		setTitle("Detail Alumni Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/daftarsemuaalumni
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Alumni"}
	singularName={"Alumni"}
	items={{}}
	isLoading={isLoading.detailAlumni}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailAlumni {...{ data : {  }}} />
</Layouts.DetailContainerLayout>
<Layouts.DetailContainerLayout
	title={"Detail Alumni1"}
	singularName={"Alumni1"}
	items={{}}
	isLoading={isLoading.detailAlumni1}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailAlumni1 {...{ data : {  }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailAlumniPage

