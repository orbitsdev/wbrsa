


import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from 'vuetify/components';

const vuetify = createVuetify({
    components,
    ssr: true,
    icons:{
        iconfont: 'mdi',
        }

  })
  
  export default vuetify;
