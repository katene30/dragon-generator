
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boy-dragon').del()
    .then(function () {
      // Inserts seed entries
      return knex('boy-dragon').insert([
        {id: 1, image: '/images/boy-dragons/image1', first_name: 'Smaug', last_name: 'destroyer of worlds'},
        {id: 2, image: '/images/boy-dragons/image2', first_name: 'Puff', last_name: 'the magic dragon'},
        {id: 3, image: '/images/boy-dragons/image3', first_name: 'Toothless', last_name: 'no teeth'}
      ]);
    });
};
