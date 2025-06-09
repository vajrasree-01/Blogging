# Blogging

This project is a fully functional Blog Website built using React.js. It is designed to allow users to perform all basic CRUD (Create, Read, Update, Delete) operations on blog posts while maintaining a clean and intuitive user interface.

At the core of this application is React state management using the useState and useEffect hooks. On the initial load, the app fetches blog data from the JSONPlaceholder API and displays the first 10 blog posts to keep the UI lightweight and fast. All changes (adding, editing, deleting blogs) are performed locally, updating the state in real time without affecting the original API.

The app makes extensive use of React Router DOM for smooth, client-side navigation. It includes multiple routes:

A homepage with a welcome message

A blog listing page that shows all blog titles with snippets

A detailed view page for reading full blog content

A form page for adding new blogs

A separate edit page (using the same form component) that loads existing data for updating

One of the key design decisions in the project was to reuse the same form component for both adding and editing blogs. This is achieved by checking the route parameters (useParams) to determine if the user is editing an existing blog or creating a new one. useNavigate is used for redirection after form submission.

Each blog post card includes action buttons for Edit and Delete, styled with meaningful colors (like green for add, yellow for edit, red for delete) using simple inline CSS. This ensures that the app remains visually clean and avoids the overhead of external stylesheets or libraries.

Overall, this project demonstrates strong understanding of component reusability, routing logic, form handling, and REST API integration. It also showcases best practices in organizing a React application, making it a great foundation for more complex projects in the future.


output:
![Screenshot 2025-06-09 145956](https://github.com/user-attachments/assets/c992d76b-7f0e-4aa9-8eea-debc027ff10a)
![Screenshot 2025-06-09 150017](https://github.com/user-attachments/assets/a5ee2f07-7074-45e7-9eb8-8cefaac18390)
![Screenshot 2025-06-09 150039](https://github.com/user-attachments/assets/17a72915-58bf-4514-8237-dec4951d8ee9)
![Screenshot 2025-06-09 150055](https://github.com/user-attachments/assets/91a142cf-a630-4d31-9013-b460ac366787)
![Screenshot 2025-06-09 150111](https://github.com/user-attachments/assets/7b9988e2-8a8e-47aa-b150-a3ee410c93fe)
