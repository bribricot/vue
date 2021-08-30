app.component('review-form', {
	template: 
	` 
	<form class="review-form" @submit.prevent="onSubmit"> <!-- prevent is an other modifier that prevents browser refresh -->
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating"> //modifier number 
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      response: '',
    }
  },
  methods: {
  	onSubmit() {
  		if (this.name === '' || this.review === '' || this.rating === null) {
  			alert('Review incomplete')
  			return
  		}
  		let productReview = {
	  		name: this.name,
	  		review: this.review,
	  		rating: this.rating,
  		}
  		this.$emit('review-submitted', productReview)
  		this.name = ''
  		this.review = ''
  		this.rating = null
  	}
  } 
})