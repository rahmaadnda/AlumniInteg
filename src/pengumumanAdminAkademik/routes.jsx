/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from "@/commons/auth/RequireAuth";
import React from 'react';

import DaftarPengumumanAdminAkademikPage from './containers/DaftarPengumumanAdminAkademikPage'
import PostPengumumanAdminAkademikPage from './containers/PostPengumumanAdminAkademikPage'

const pengumumanAdminAkademikRoutes = [
	{ 
		path: "/pengumumanakademik/post",
		element: <RequireAuth permissionNeeded="ReadLaporanCPL" ><PostPengumumanAdminAkademikPage/></RequireAuth>
	},
	{ 
		path: "/pengumumanakademik",
		element: <RequireAuth permissionNeeded="ReadInformasiAkademik" ><DaftarPengumumanAdminAkademikPage/></RequireAuth>
	}
]

export default pengumumanAdminAkademikRoutes
