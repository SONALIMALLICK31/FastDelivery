import SQLite from 'react-native-sqlite-storage';
//import {openDatabase} from 'react-native-sqlite-storage'
// Connction to access the pre-populated user_db.db
//const db = openDatabase({name: 'user_db.db', createFromLocation: 1});

//const db = openDatabase({name: 'UlDokan.db'});

//database connection
const db = SQLite.openDatabase(
  {
    name: 'UlDokan.db',
    location: 'default',
    createFromLocation: '1',
  },
  () => {
    console.log('Database connected!');
  }, //on success
  error => console.log('Database error', error), //on error
);

export default db;
