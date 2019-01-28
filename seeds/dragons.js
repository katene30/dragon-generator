
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dragons').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragons').insert([
        {id: 1, gender: 'male', image: 'images/image1.jpg', firstName: 'Puff', lastName: 'the magic dragon'},
        {id: 2, gender: 'male', image: 'images/image2.png', firstName: 'Toothless', lastName: 'the toothless'},
        {id: 3, gender: 'male', image: 'images/image3.jpg', firstName: 'Smaug', lastName: 'destroyer of worlds'},
        {id: 4, gender: 'female', image: 'images/image4.jpg', firstName: 'Saphira', lastName: 'Brightscales'},
        {id: 5, gender: 'female', image: 'images/image5.png', firstName: 'Spyro', lastName: 'the purple dragon'},
        {id: 6, gender: 'female', image: 'images/image6.png', firstName: 'Dragon', lastName: 'the wife of a donkey'},
        {id: 7, gender: 'male', image: 'images/image7.png', firstName: 'Mushu', lastName: 'the guardian spirit'},
        {id: 8, gender: 'female', image: 'images/image8.png', firstName: 'Maleficent', lastName: 'Guardian of the Moors'}

      ]);
    });
};
