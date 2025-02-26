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
import daftarIndustriRoutes from "@/daftarIndustri/routes";
import semesterRoutes from "@/semester/routes";
import approvalSubscriptionRoutes from "@/approvalSubscription/routes";
import programStudiRoutes from "@/programStudi/routes";
import buatAkunAlumniRoutes from "@/buatAkunAlumni/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import kelasRoutes from "@/kelas/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import updateLulusanRoutes from "@/updateLulusan/routes";
import profileAlumniRoutes from "@/profileAlumni/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import profileIndustriRoutes from "@/profileIndustri/routes";
import pengajuanSubscriptionRoutes from "@/pengajuanSubscription/routes";
import verifikasiAlumniRoutes from "@/verifikasiAlumni/routes";
import verifikasiMahasiswaRoutes from "@/verifikasiMahasiswa/routes";
import pengumumanAdminAkademikRoutes from "@/pengumumanAdminAkademik/routes";
import pengumumanIndustriRoutes from "@/pengumumanIndustri/routes";
import pengumumanAlumniRoutes from "@/pengumumanAlumni/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import profileMahasiswaRoutes from "@/profileMahasiswa/routes";

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
	...daftarIndustriRoutes, 
	...semesterRoutes, 
	...approvalSubscriptionRoutes, 
	...programStudiRoutes, 
	...buatAkunAlumniRoutes, 
	...kurikulumRoutes, 
	...mataKuliahRoutes, 
	...kelasRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...updateLulusanRoutes, 
	...profileAlumniRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...profileIndustriRoutes, 
	...pengajuanSubscriptionRoutes, 
	...verifikasiAlumniRoutes, 
	...verifikasiMahasiswaRoutes, 
	...pengumumanAdminAkademikRoutes, 
	...pengumumanIndustriRoutes, 
	...pengumumanAlumniRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...penilaianKelasRoutes, 
	...profileMahasiswaRoutes, 
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
