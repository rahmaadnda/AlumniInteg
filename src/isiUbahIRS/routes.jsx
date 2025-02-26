/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';
import IsiUbahIRSPage from './containers/IsiUbahIRSPage'

const isiUbahIRSRoutes = [
{ 
	path: "/irs/isi",
	element: <RequireAuth permissionNeeded="ReadRencanaStudiMe" ><IsiUbahIRSPage/></RequireAuth>
}

	

]

export default isiUbahIRSRoutes
