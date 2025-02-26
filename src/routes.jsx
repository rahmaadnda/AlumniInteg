import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import verifikasiAlumniRoutes from "@/verifikasiAlumni/routes";
import verifikasiMahasiswaRoutes from "@/verifikasiMahasiswa/routes";
import buatAkunAlumniRoutes from "@/buatAkunAlumni/routes";
import profileAlumniRoutes from "@/profileAlumni/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import profileMahasiswaRoutes from "@/profileMahasiswa/routes";
import programStudiRoutes from "@/programStudi/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import semesterRoutes from "@/semester/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import kelasRoutes from "@/kelas/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import daftarSemuaAlumniRoutes from "@/daftarSemuaAlumni/routes";
import daftarSemuaMahasiswaRoutes from "@/daftarSemuaMahasiswa/routes";
import daftarAlumniRoutes from "@/daftarAlumni/routes";
import daftarMahasiswaRoutes from "@/daftarMahasiswa/routes";
import kurikulumRoutes from "@/kurikulum/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...verifikasiAlumniRoutes, 
	...verifikasiMahasiswaRoutes, 
	...buatAkunAlumniRoutes, 
	...profileAlumniRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...profileMahasiswaRoutes, 
	...programStudiRoutes, 
	...mataKuliahRoutes, 
	...semesterRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...kelasRoutes, 
	...pembayaranRoutes, 
	...penilaianKelasRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...daftarSemuaAlumniRoutes, 
	...daftarSemuaMahasiswaRoutes, 
	...daftarAlumniRoutes, 
	...daftarMahasiswaRoutes, 
	...kurikulumRoutes, 
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
