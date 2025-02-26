/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';

import LaporanCPMKPage from './containers/LaporanCPMKPage'

const laporanCPMKRoutes = [
	{ 
		path: "/cpmk/laporan",
		element: <RequireAuth permissionNeeded="ReadRencanaStudiMe" ><LaporanCPMKPage/></RequireAuth>
	}
]

export default laporanCPMKRoutes
