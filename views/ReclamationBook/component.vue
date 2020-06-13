<style src="./style.scss" lang="scss"></style>
<template src="./template.html"></template>

<script>
import {VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp} from "vuetify/lib"
import axios from "axios";
import $ from 'jquery'

const defaultForm = {
  isClient: false,
  documentType: "",
  documentNumber: "",
  fullname: "",
  father_lastname: "",
  mother_lastname: "",
  email: "",
  phone: "",
  address: "",
  department: "",
  province: "",
  district: "",
  insertInto: "",
  incidenceDate: "",
  productService: "",
  reason: "",
  message: "",
  file: null,
  password: ""
};

export default {
  components: {
    VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp
  },
  data() {
    return {
      menu2: false,
      authorization: false,
      options: [
        { value: "1", label: "Uno" },
        { value: "2", label: "Dos" }
      ],
      documentTypeList: [
        {
          value: "dni",
          label: "DNI"
        },
        {
          value: "passport",
          label: "Pasaporte"
        },
        {
          value: "ptp",
          label: "PTP"
        },
        {
          value: "inmigration-card",
          label: "Carnet de Extranjeria"
        }
      ],
      districtList: [
        {
          value: "150101",
          label: "Lima"
        },
        {
          value: "150128",
          label: "Rímac"
        },

        {
          value: "150120",
          label: "Magdalena del Mar"
        },
        {
          value: "150134",
          label: "San Luis"
        },
        {
          value: "150105",
          label: "Breña"
        },
        {
          value: "150121",
          label: "Pueblo Libre"
        },

        {
          value: "150136",
          label: "San Miguel"
        },
        {
          value: "150113",
          label: "Jesús María"
        },
        {
          value: "150116",
          label: "Lince"
        },
        {
          value: "150131",
          label: "San Isidro"
        },
        {
          value: "151021",
          label: "Miraflores"
        },
        {
          value: "150141",
          label: "Surquillo"
        },
        {
          value: "150130",
          label: "San Borja"
        },
        {
          value: "150104",
          label: "Barranco"
        },
        {
          value: "150115",
          label: "La Victoria"
        },
        {
          value: "150140",
          label: "Santiago de Surco"
        },
        {
          value: "150114",
          label: "La Molina"
        },
        {
          value: "070103",
          label: "Carmen de la Legua Reynoso"
        },
        {
          value: "200602",
          label: "Bellavista"
        },
        {
          value: "070105",
          label: "La Punta"
        },
        {
          value: "070104",
          label: "La Perla"
        },
        {
          value: "070101",
          label: "Callao"
        },
        {
          value: "150111",
          label: "El Agustino"
        },
        {
          value: "150108",
          label: "Chorrillos"
        },
        {
          value: "150112",
          label: "Independencia"
        },
        {
          value: "150135",
          label: "San Martín de Porres"
        },
        {
          value: "150110",
          label: "Comas"
        },
        {
          value: "150106",
          label: "Carabayllo"
        },
        {
          value: "150117",
          label: "Los Olivos"
        },
        {
          value: "150102",
          label: "Ancón"
        },
        {
          value: "150125",
          label: "Puente Piedra"
        },
        {
          value: "150137",
          label: "Santa Anita"
        },
        {
          value: "150103",
          label: "Ate"
        },
        {
          value: "150132",
          label: "San Juan de Lurigancho"
        },
        {
          value: "070106",
          label: "Ventanilla"
        },
        {
          value: "150133",
          label: "San Juan de Miraflores"
        },
        {
          value: "150143",
          label: "Villa María del Triunfo"
        },
        {
          value: "150142",
          label: "Villa El Salvador"
        },
        {
          value: "150119",
          label: "Lurin"
        },
        {
          value: "150123",
          label: "Pachacamac"
        },
        {
          value: "150118",
          label: "Lurigancho"
        },
        {
          value: "150109",
          label: "Cieneguilla"
        },
        {
          value: "150107",
          label: "Chaclacayo"
        },
        {
          value: "150139",
          label: "Santa Rosa"
        },
        {
          value: "150126",
          label: "Punta Hermosa"
        },
        {
          value: "150127",
          label: "Punta Negra"
        },
        {
          value: "150129",
          label: "San Bartolo"
        },
        {
          value: "150138",
          label: "Santa María del Mar"
        },
        {
          value: "150124",
          label: "Pucusana"
        }
      ],
      departmentList: [
        { value: "01", label: "Amazonas" },
        {
          value: "02",
          label: "Áncash"
        },
        {
          value: "03",
          label: "Apurímac"
        },
        {
          value: "04",
          label: "Arequipa"
        },
        {
          value: "05",
          label: "Ayacucho"
        },
        {
          value: "06",
          label: "Cajamarca"
        },
        {
          value: "07",
          label: "Callao"
        },
        {
          value: "08",
          label: "Cusco"
        },
        {
          value: "09",
          label: "Huancavelica"
        },
        {
          value: "10",
          label: "Huánuco"
        },
        {
          value: "11",
          label: "Ica"
        },
        {
          value: "12",
          label: "Junín"
        },
        {
          value: "13",
          label: "La Libertad"
        },
        {
          value: "14",
          label: "Lambayeque"
        },
        {
          value: "15",
          label: "Lima"
        },
        {
          value: "16",
          label: "Loreto"
        },
        {
          value: "17",
          label: "Madre de Dios"
        },
        {
          value: "18",
          label: "Moquegua"
        },
        {
          value: "19",
          label: "Pasco"
        },
        {
          value: "20",
          label: "Piura"
        },
        {
          value: "21",
          label: "Puno"
        },
        {
          value: "22",
          label: "San Martín"
        },
        {
          value: "23",
          label: "Tacna"
        },
        {
          value: "24",
          label: "Tumbes"
        },
        {
          value: "25",
          label: "Ucayali"
        }
      ],
      productServiceList: [
        { value: "action", label: "subasta" }
      ],
      insertIntoList: [
        { value: "1", label: "Consulta" },
        { value: "2", label: "Queja" },
        { value: "3", label: "Reclamo" },
        { value: "4", label: "Sugerencia" }
      ],
      reasonList: [
        { value: "01", label: "No se cumplió lo acotado" },
        {
          value: "02",
          label: "Ha habido un problema al realizar mi cambio de divisa"
        },
        { value: "03", label: "El cambio no es igual al que se acordó" }
      ],
      form: { ...defaultForm },
      value: true,
      fileList: []
    };
  },

  methods: {
    navSlide() {
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    },
    async submit() {
      if (this.fileList.length > 0) {
        for (let i = 0; i < this.fileList.length; i++) {
          let formData = new FormData();
          formData.append("file", this.fileList[i].raw);
          formData.append(
            "upload_preset",
            process.env.VUE_APP_CLOUDINARY_UPLOAD_PRESET
          );
          try {
            const res = await axios({
              url: process.env.VUE_APP_CLOUDINARY_URL,
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data: formData
            });
            this.form.fileUrl.push(res.data.url);
          } catch (error) {
            console.log(error);
          }
        }

        console.log(this.form);
      } else {
        console.log(this.form);
      }
    },
    uploadList(file) {
      this.fileList.push(file);
    },
    removeList(file, fileList) {
      this.fileList = fileList;
    }
  }
};
</script>
