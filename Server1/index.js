import app from './app.js';

const startServer = async () => {
    try {
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  startServer();







