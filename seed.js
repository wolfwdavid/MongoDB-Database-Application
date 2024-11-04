const mongoose = require('mongoose');
const Protein = require('./models/Protein');

mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    
    // Sample protein data
    const proteins = [
      { name: 'Chicken Breast', source: 'Poultry', quantity: 31, benefits: 'High in protein and low in fat' },
      { name: 'Eggs', source: 'Poultry', quantity: 6, benefits: 'Rich in protein and essential nutrients' },
      { name: 'Lentils', source: 'Legumes', quantity: 18, benefits: 'High in protein and fiber' },
      { name: 'Salmon', source: 'Fish', quantity: 25, benefits: 'Rich in omega-3 fatty acids and protein' },
      { name: 'Almonds', source: 'Nuts', quantity: 6, benefits: 'Contains protein and healthy fats' },
    ];

    await Protein.insertMany(proteins);
    console.log('Sample protein data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
