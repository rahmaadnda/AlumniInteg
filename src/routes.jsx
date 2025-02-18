import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import kelasRoutes from "@/kelas/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import programStudiRoutes from "@/programStudi/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import semesterRoutes from "@/semester/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import verifikasiAlumniRoutes from "@/verifikasiAlumni/routes";
import verifikasiMahasiswaRoutes from "@/verifikasiMahasiswa/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...pembayaranRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...kelasRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...programStudiRoutes, 
	...kurikulumRoutes, 
	...mataKuliahRoutes, 
	...semesterRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...verifikasiAlumniRoutes, 
	...verifikasiMahasiswaRoutes, 
	...penilaianKelasRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
