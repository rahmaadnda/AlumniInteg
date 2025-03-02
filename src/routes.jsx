import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import pengumumanAlumniRoutes from "@/pengumumanAlumni/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import kelasRoutes from "@/kelas/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import profileMahasiswaRoutes from "@/profileMahasiswa/routes";
import approvalSubscriptionRoutes from "@/approvalSubscription/routes";
import programStudiRoutes from "@/programStudi/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import buatAkunAlumniRoutes from "@/buatAkunAlumni/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import updateLulusanRoutes from "@/updateLulusan/routes";
import semesterRoutes from "@/semester/routes";
import verifikasiAlumniRoutes from "@/verifikasiAlumni/routes";
import verifikasiMahasiswaRoutes from "@/verifikasiMahasiswa/routes";
import profileAlumniRoutes from "@/profileAlumni/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import pengajuanSubscriptionRoutes from "@/pengajuanSubscription/routes";
import daftarSemuaAlumniRoutes from "@/daftarSemuaAlumni/routes";
import daftarSemuaMahasiswaRoutes from "@/daftarSemuaMahasiswa/routes";
import daftarAlumniRoutes from "@/daftarAlumni/routes";
import daftarMahasiswaRoutes from "@/daftarMahasiswa/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...pengumumanAlumniRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...kelasRoutes, 
	...kurikulumRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...profileMahasiswaRoutes, 
	...approvalSubscriptionRoutes, 
	...programStudiRoutes, 
	...pembayaranRoutes, 
	...buatAkunAlumniRoutes, 
	...mataKuliahRoutes, 
	...updateLulusanRoutes, 
	...semesterRoutes, 
	...verifikasiAlumniRoutes, 
	...verifikasiMahasiswaRoutes, 
	...profileAlumniRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...penilaianKelasRoutes, 
	...pengajuanSubscriptionRoutes, 
	...daftarSemuaAlumniRoutes, 
	...daftarSemuaMahasiswaRoutes, 
	...daftarAlumniRoutes, 
	...daftarMahasiswaRoutes, 
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
