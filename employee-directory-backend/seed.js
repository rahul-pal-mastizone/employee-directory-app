const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function seed() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('employeeDirectory');

    // Collections
    const employeeCollection = db.collection('employees');
    const departmentCollection = db.collection('departments');

    // Clear old data
    await employeeCollection.deleteMany({});
    await departmentCollection.deleteMany({});

    // Seed departments
    const departments = [
      { name: 'Engineering', floor: 2 },
      { name: 'Sales', floor: 3 },
      { name: 'HR', floor: 1 },
    ];

    const insertedDepts = await departmentCollection.insertMany(departments);

    // Seed employees
    const employees = [
      { name: 'Amit Sharma', position: 'Software Engineer', department: 'Engineering', salary: 60000 },
      { name: 'Priya Verma', position: 'DevOps Engineer', department: 'Engineering', salary: 65000 },
      { name: 'Ravi Mehta', position: 'Sales Executive', department: 'Sales', salary: 40000 },
      { name: 'Neha Jain', position: 'HR Manager', department: 'HR', salary: 50000 },
      { name: 'Karan Singh', position: 'Technical Lead', department: 'Engineering', salary: 75000 },
    ];

    await employeeCollection.insertMany(employees);

    console.log('✅ Seed data inserted successfully!');
  } catch (err) {
    console.error('❌ Error seeding data:', err.message);
  } finally {
    await client.close();
  }
}

seed();