app.component('review-list', {
	props: {
		reviews: {
			type: Array,
		}
	},
	template:
	`
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}",
    	<br>
        "{{ review.response }}. Here is my recommendation."
      </li>
    </ul>
  </div>
`
})