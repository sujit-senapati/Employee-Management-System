

const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive homepage design.",
                "taskDate": "2024-10-10",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Navbar Bug",
                "taskDescription": "Resolve the issue with navbar dropdown not working.",
                "taskDate": "2024-10-05",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Dashboard",
                "taskDescription": "Add new analytics widgets to the admin dashboard.",
                "taskDate": "2024-10-22",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set Up CI/CD Pipeline",
                "taskDescription": "Integrate CI/CD for automated testing and deployment.",
                "taskDate": "2024-10-12",
                "category": "DevOps"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Optimize API Performance",
                "taskDescription": "Refactor the API to reduce response time.",
                "taskDate": "2024-10-08",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Test Payment Gateway",
                "taskDescription": "Ensure the payment gateway integration works smoothly.",
                "taskDate": "2024-10-22",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Data Migration",
                "taskDescription": "Migrate user data from legacy system.",
                "taskDate": "2024-10-15",
                "category": "Database"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create API Documentation",
                "taskDescription": "Document all API endpoints in detail.",
                "taskDate": "2024-10-20",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Unit Testing for API",
                "taskDescription": "Write unit tests for all new API endpoints.",
                "taskDate": "2024-10-11",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Refactor Codebase",
                "taskDescription": "Clean up and refactor the codebase for better performance.",
                "taskDate": "2024-10-05",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Design New Landing Page",
                "taskDescription": "Create a modern landing page for the product.",
                "taskDate": "2024-10-13",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Backup Database",
                "taskDescription": "Set up automated backups for the database.",
                "taskDate": "2024-10-21",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix UI Bugs",
                "taskDescription": "Resolve issues with inconsistent UI elements.",
                "taskDate": "2024-10-03",
                "category": "Development"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Blog Post",
                "taskDescription": "Write a new blog post on upcoming product features.",
                "taskDate": "2024-10-09",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare Marketing Materials",
                "taskDescription": "Design marketing assets for the product launch.",
                "taskDate": "2024-10-06",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Analyze Competitor Strategies",
                "taskDescription": "Conduct a competitive analysis and prepare a report.",
                "taskDate": "2024-10-19",
                "category": "Research"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Social Media",
                "taskDescription": "Post updates on social media channels.",
                "taskDate": "2024-10-17",
                "category": "Social Media"
            }
        ]
    }
]

const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}




export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees)); //contvert data to string to store in local storage
    localStorage.setItem('admin', JSON.stringify(admin));
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('emplyees')); //parse data back to normal array format from strings
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
}