const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['Small', 'Large', 'Extra-large'],
            variants: [
              { id: 2234, color: '#47bf67', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: '#1382e3', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
        	this.cart -= 1
            	if (this.cart < 0) {
                	this.cart = 0
            }
        },
        emptyCart() {
        	this.cart >= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
    }
})
