const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: ['Made in France', 'Quality']
        }
    },
    methods: {
    	updateCart(id) {
    		this.cart.push(id) 
    	},
    	/* To make our app more realistic, our cart shouldn’t just be a number. It should be an array that contains the IDS of the products that are added into it.*/
    	removeFromCart(id) {
    		const index = this.cart.indexOf(id)
            if (index != -1) {
                this.cart.splice(index, 1)
            }
	        /* The indexOf() method returns the FIRST index at which a given element can be found in the array, or -1 if it is NOT present. */

	        /* The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). */ 
        }
    }

})
