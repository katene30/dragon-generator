
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dragons').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragons').insert([
        {id: 1, Gender: 'male', image: 'images/image1.jpg', firstName: 'Puff', lastName: 'the magic dragon'},
        {id: 2, Gender: 'male', image: 'images/image2.png', firstName: 'Toothless', lastName: 'the toothless'},
        {id: 3, Gender: 'male', image: 'images/image3.jpg', firstName: 'Smaug', lastName: 'destroyer of worlds'},
        {id: 4, Gender: 'female', image: 'images/image4', firstName: 'Saphira', lastName: 'Brightscales'},
        {id: 5, Gender: 'female', image: 'images/image5', firstName: 'Spyro', lastName: 'the purple dragon'},
        {id: 6, Gender: 'female', image: 'images/image6', firstName: 'Dragon', lastName: 'the wife of a donkey'}
      ]);
    });
};
