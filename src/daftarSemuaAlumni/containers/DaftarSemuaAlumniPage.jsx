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
import SemuaTable from "../components/SemuaTable";

import getAlumniDataList from '../services/getAlumniDataList'
import SemuaTable from "../components/SemuaTable";

import getAlumniDataList1 from '../services/getAlumniDataList1'
const DaftarSemuaAlumniPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableSemuaAlumni: false,
	tableSemuaAlumni1: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [alumniDataList, setAlumniDataList] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableSemuaAlumni: true}))
				const { data: alumniDataList } = await getAlumniDataList()
				setAlumniDataList(alumniDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableSemuaAlumni: false}))
			}
		}
		fetchData()	
  	}, [])
const [alumniDataList1, setAlumniDataList1] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableSemuaAlumni1: true}))
				const { data: alumniDataList1 } = await getAlumniDataList1()
				setAlumniDataList1(alumniDataList1.data)
			} finally {
				setIsLoading(prev => ({...prev, tableSemuaAlumni1: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Semua Alumni Page")
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
	title={"Table Semua Alumni"}
	singularName={"Semua"}
	items={[alumniDataList]}
	isLoading={isLoading.tableSemuaAlumni}
>
	<SemuaTable
		alumniDataList={alumniDataList}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.ListContainerTableLayout
	title={"Table Semua Alumni1"}
	singularName={"Semua"}
	items={[alumniDataList1]}
	isLoading={isLoading.tableSemuaAlumni1}
>
	<SemuaTable
		alumniDataList1={alumniDataList1}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarSemuaAlumniPage

