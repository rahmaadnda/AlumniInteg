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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import smwTable from "../components/smwTable";

import getalumnidatalist from '../services/getalumnidatalist'
const dftrsmwalumnipage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tablesmwalumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [alumnidatalist, setalumnidatalist] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tablesmwalumni: true}))
				const { data: alumnidatalist } = await getalumnidatalist()
				setalumnidatalist(alumnidatalist.data)
			} finally {
				setIsLoading(prev => ({...prev, tablesmwalumni: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("dftr smw alumni page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"table smw alumni"}
	singularName={"smw"}
	items={[alumnidatalist]}
	isLoading={isLoading.tablesmwalumni}
>
	<smwTable
		alumnidatalist={alumnidatalist}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default dftrsmwalumnipage

