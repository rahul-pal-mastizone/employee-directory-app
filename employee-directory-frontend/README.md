# 🚀 Employee Directory App

A full-stack MERN application built as part of the SPACEAI Senior MERN Stack Developer assignment. It enables users to manage employee records with department-based filtering, detailed views, and seamless form-based additions.

---

## 🔗 Live Demo

- **Frontend (Next.js + Vercel):** [https://employeee-directory-app.vercel.app](https://employeee-directory-app.vercel.app)
- **Backend (GraphQL + Render):** [https://employee-directory-app-nouq.onrender.com/graphql](https://employee-directory-app-nouq.onrender.com/graphql)
- **GitHub Repository:** [https://github.com/rahul-pal-mastizone/employee-directory-app](https://github.com/rahul-pal-mastizone/employee-directory-app)

---

## 🧰 Tech Stack

| Layer     | Technology                          |
|-----------|--------------------------------------|
| Frontend  | Next.js (App Router), Apollo Client, Tailwind CSS |
| Backend   | Node.js, Apollo Server 4, GraphQL    |
| Database  | MongoDB (Native Driver)              |
| Deployments | Vercel (Frontend), Render (Backend) |

---

## 📦 Features

### 🖥️ Frontend (Next.js)

- ✅ List all employees (name + position)
- ✅ Filter employees by department
- ✅ Dynamic detail pages (`/employee/[id]`)
- ✅ Add new employee form with validation
- ✅ Client-side routing and Apollo integration
- ✅ Auto-refresh on submission
- ✅ Fully responsive with Tailwind CSS

### 🔧 Backend (Apollo Server)

- ✅ GraphQL API with Queries and Mutations
- ✅ MongoDB connection (Native Driver)
- ✅ Seeded with sample data (5 employees, 3 departments)
- ✅ Error handling for invalid operations

---

## 🧪 GraphQL Schema

```graphql
type Employee {
  id: ID!
  name: String!
  position: String!
  department: String!
  salary: Int!
}

type Department {
  id: ID!
  name: String!
  floor: Int!
}

type Query {
  getAllEmployees: [Employee!]!
  getEmployeeDetails(id: ID!): Employee
  getEmployeesByDepartment(department: String!): [Employee!]!
}

type Mutation {
  addEmployee(name: String!, position: String!, department: String!, salary: Int!): Employee
}

---

## ⚙️ Running Locally

### 🔙 Backend Setup

```bash
cd employee-directory-backend
npm install
cp .env.example .env   # Add your MONGODB_URI here
node seed.js           # Seed the database with initial employees & departments
npm start              # Start Apollo Server

cd employee-directory-frontend
npm install
npm run dev            # Start the Next.js frontend (http://localhost:3000)


---

## 👨‍💻 Author

**Rahul Pal**  
📧 [rahul.pal.@gmail.com](mailto:rahulpal.moderntechno@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/rahul155/)
