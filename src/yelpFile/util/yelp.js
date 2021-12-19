const apiKey = 'IE8W9qEerzYKHEvSpi3jHaHGesuw-zSputGQMMmg2sFTw2Kog8xCQQsOOR9LqNrkSVoDWEbNtBeO2ZCFvEk8udeyA034y0WBfnK85VWXa2aIkRxJgZeHP5eqSD0jYHYx';

const Yelp = {
    
    search(term,location,sortBy) {
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(
            url,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
};
export default Yelp;