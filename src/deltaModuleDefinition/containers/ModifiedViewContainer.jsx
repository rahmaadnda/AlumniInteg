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
import getModifiedDataBinding from '../services/getModifiedDataBinding'
const ModifiedViewContainer = props => {
const [isLoading, setIsLoading] = useState({
	modifiedDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [modifiedDataBinding, setModifiedDataBinding] = useState()
const {  } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, modifiedDetail: true}))
			const { data: modifiedDataBinding } = await getModifiedDataBinding({ invalid })
			setModifiedDataBinding(modifiedDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, modifiedDetail: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Modified ViewContainer")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Modified Detail"}
	singularName={"Detail"}
	items={{...modifiedDataBinding}}
	isLoading={isLoading.modifiedDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<ModifiedDetail {...{ data : { ...modifiedDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ModifiedViewContainer

