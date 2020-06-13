<template>
    <header-layout>
        <reclamation-book></reclamation-book>
    </header-layout>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutTransparent"
import ReclamationBook from "~/views/ReclamationBook/component"
export default {
    components:{
        "header-layout": HeaderLayout,
        "reclamation-book": ReclamationBook
    },
    metaInfo: {
        title: 'Libro de Reclamaciones  | FIRBID',
        meta: [
            {name: 'description', content:'Aquí puedes ingresar tus reclamos, quejas y sugerencias para FIRBID.'}
        ]
    }
}
</script>