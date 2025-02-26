/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import dftrsmwalumnipage from './containers/dftrsmwalumnipage'
import detailalumnpage from './containers/detailalumnpage'

const dftrsmuaalumniRoutes = [
	{ 
		path: "",
		element: <RequireAuth permissionNeeded="ReadAlumni" ><detailalumnpage/></RequireAuth>
	},
	{ 
		path: "",
		element: <RequireAuth permissionNeeded="ReadAlumni" ><dftrsmwalumnipage/></RequireAuth>
	}
]

export default dftrsmuaalumniRoutes
