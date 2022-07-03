import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/api-db')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.log('Error:', error.message));