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
import getTahunLulusSelectionField from '../services/getTahunLulusSelectionField'
const DaftarSemuaAlumniPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableSemuaAlumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [alumniDataList, setAlumniDataList] = useState()
const [tahunLulusSelectionField, setTahunLulusSelectionField] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableSemuaAlumni: true}))
				const { data: alumniDataList } = await getAlumniDataList()
				const { data: tahunLulusSelectionField } = await getTahunLulusSelectionField()
				setAlumniDataList(alumniDataList.data)
				setTahunLulusSelectionField(tahunLulusSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableSemuaAlumni: false}))
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
	items={[alumniDataList, tahunLulusSelectionField]}
	isLoading={isLoading.tableSemuaAlumni}
>
	<SemuaTable
		alumniDataList={alumniDataList}
		tahunLulusSelectionField={tahunLulusSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarSemuaAlumniPage

