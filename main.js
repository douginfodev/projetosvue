const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Meias',
            descriptionProduct: 'Estas meias são importadas diretamente da gringa',
            image: './assets/images/socks_blue.jpg',
            alternative: 'Meias azuis com logomarca Vue',
            url: 'https://vuejs.org',
            target: '_blank',
            visible: false,
            details: ['P','M','G','XG'],
            variants:[
                {
                    id:2234, color:'green',image:'.assets/images/socks_green.jpg'
                },
                {
                    id:2235, color:'blue',image:'.assets/images/socks_blue.jpg'
                },
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        }
    }
})
