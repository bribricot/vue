app.component('product-display', {
	props: {
		premium: {
			type: Boolean,
			required: true
		}
	},
	template:
		`<div class="product-display">
	        <div class="product-container">
	          <div class="product-image">
				<img :src="image" :class="{ 'out-of-stock-img': !inStock }">
	          </div>
	          <div class="product-info">
	            <h1>{{ title }}</h1>
	            <p class="p-description">{{ isOnSale }}</p>
	            <p v-if="inStock">In Stock</p> <!-- Now inStock is no longer a data property; it’s the new computed property. -->
	            <p v-else>Out of Stock</p>
	            <p>Shipping : {{ shipping }}</p>
	            <ul>
	              <li v-for="detail in details">{{ detail }}</li>
	            </ul>
	            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div> 
	            <!-- :class="{ active: activeClass}" -->
	            <ul>
	              <li v-for="(size, value) in sizes" :key="value">{{ size }}</li>
	            </ul>
	            <button class="button" :class="{ 'disabled-button': !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button> <!-- or (@click="cart += 1") -->
	            <button class="remove-button" @click="removeFromCart">Remove</button>
	          </div>
	        </div>
	    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            onSale: true,
            // image: './assets/images/socks_blue.jpg',
            /* 
            inStock data value, is no longer reflects the truth about our product and its variant quantities. So we’ll want to create a computed property we can use to display “In stock” or “Out of stock” based on these new quantities.
            */
            selectedVariant: 0, 
            // Now, it's gonna be updated with the index of the variant that is currently hovered on. 
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['Small', 'Large', 'Extra-large'],
            variants: [
              { id: 2234, color: '#47bf67', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: '#1382e3', image: './assets/images/socks_blue.jpg', quantity: 0},
            ]
        }
    },
    methods: {
        /* addToCart
        cart += 1 : Plutôt qu'ici, cette fonctionnalité sera présente dans le main js sous forme de méthode. Elle sera emise depuis ici sous la forme d'une méthode "updateCart" de l'évènement listener @add-to-cart de mon component product-display dans le html. Le panier n'est pas dans notre Product Display à la base. Pour que les autres components sachent quand l'event a eu lieu, on doit l'emettre depuis ici, pour dire à l'evenement parent, qu'il a bien eu lieu.
        */
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
    	/* removeFromCart 
		Old way without Id to remove items from the cart
		this.cart -= 1
        if (this.cart < 0) {
            this.cart = 0
        } 
        */
        removeFromCart() {
        	this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        /* updateImage vs updateVariant
        	Plus valable car on a supprimé l'image de la data
        	updateImage(variantImage) {
             this.image = variantImage
        	}, 
		console.log(index) => toggle entre O et 1
        */
        updateVariant(index) {
   			this.selectedVariant = index	 
		}
    },

    computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].image 
			// 0 targets the first one "variants", 1 targets the second one "variants".
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity // Same but with the quantity.
		},
		isOnSale() {
			if (this.onSale) {
				return 'Wonderful, ' + this.brand + ' ' + this.product + ' is on sale !'
			}
		},
		shipping() {
			if (this.premium) {
				return 'Free'
			}
			return 2.99
		}
	}
})

//payload : données utiles, par opposition au reste (métadonnées...), en français « charge utile ». Il s'agit par exemple de ce qu'un paquet réseau transfère pour le compte de son émetteur, par opposition aux informations qu'il recèle par ailleurs (destinées à la machinerie réseau, en particulier au routage).Cela désigne également ce qui permet l'activité malicieuse d'un malware (par exemple l'affichage de messages incongrus. 