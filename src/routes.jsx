import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import daftarSemuaAlumniRoutes from "@/daftarSemuaAlumni/routes";
import daftarSemuaMahasiswaRoutes from "@/daftarSemuaMahasiswa/routes";
import daftarAlumniRoutes from "@/daftarAlumni/routes";
import daftarMahasiswaRoutes from "@/daftarMahasiswa/routes";
import profileMahasiswaRoutes from "@/profileMahasiswa/routes";
import kelasRoutes from "@/kelas/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import semesterRoutes from "@/semester/routes";
import verifikasiAlumniRoutes from "@/verifikasiAlumni/routes";
import deltaModuleDefinitionRoutes from "@/deltaModuleDefinition/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import profileAlumniRoutes from "@/profileAlumni/routes";
import buatAkunAlumniRoutes from "@/buatAkunAlumni/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import programStudiRoutes from "@/programStudi/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import updateLulusanRoutes from "@/updateLulusan/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...daftarSemuaAlumniRoutes, 
	...daftarSemuaMahasiswaRoutes, 
	...daftarAlumniRoutes, 
	...daftarMahasiswaRoutes, 
	...profileMahasiswaRoutes, 
	...kelasRoutes, 
	...pembayaranRoutes, 
	...semesterRoutes, 
	...verifikasiAlumniRoutes, 
	...deltaModuleDefinitionRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...mataKuliahRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...profileAlumniRoutes, 
	...buatAkunAlumniRoutes, 
	...penilaianKelasRoutes, 
	...programStudiRoutes, 
	...kurikulumRoutes, 
	...updateLulusanRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
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
