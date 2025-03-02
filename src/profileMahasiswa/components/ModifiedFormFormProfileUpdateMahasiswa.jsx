/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateMahasiswa from '../services/updateMahasiswa'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormProfileUpdateMahasiswa = ({ 
	dataMahasiswaUpdate
, 	makePublic
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataMahasiswaUpdate })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateMahasiswa({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/profilemahasiswa`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Profile Update Mahasiswa" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
		        name="nama"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama"
		            placeholder="Masukkan nama"
					disabled
		            defaultValue={dataMahasiswaUpdate.nama}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="npm"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="NPM"
		            placeholder="Masukkan npm"
					disabled
		            defaultValue={dataMahasiswaUpdate.npm}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="tahunAngkatan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tahun Angkatan"
		            placeholder="Masukkan tahun angkatan"
					disabled
		            defaultValue={dataMahasiswaUpdate.tahunAngkatan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="statusAkademik"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Status Akademik"
		            placeholder="Masukkan status akademik"
					disabled
		            defaultValue={dataMahasiswaUpdate.statusAkademik}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="email"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Email"
		            placeholder="Masukkan email"
					disabled
		            defaultValue={dataMahasiswaUpdate.email}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
			name="isPublic"
			control={control}
			render={({ field }) => (
				<div className="form-group">
				<label>
					<input
					type="checkbox"
					{...field}
					checked={field.value} 
					/>
					Izinkan Akses Profile kepada Alumni dan Industri
				</label>
				</div>
			)}
			/>
		  ]}
	
		  itemsEvents={[
				<Button type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
  )
}

export default ModifiedFormFormProfileUpdateMahasiswa
