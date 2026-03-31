# 🎓 Aula Virtual

**Aula Virtual** is a website for **course management** and resolving **student questions**. It allows creating and listing courses, and enables students to post their questions so the professor can answer them.

---

## 📑 Table of Contents

- [Features](#-features)  
- [Data Model](#-data-model)  
- [FAQ](#-faq)  

---

## 🏆 Features

- **Course CRUD**: Create, read, update, and delete courses.  
- **Question List**: Students can post questions within each course.  
- **Clear Interface**: Course view with its detailed information and a dedicated questions section.  
- **Responsive**: Fully adapted for desktop and mobile devices.

---

## 🗂️ Data Model

### Main Entity: Course
- **name** (string)  
- **description** (string)  
- **credits** (number)  
- **professor** (string)  
- **image** (URL / file)

### Secondary Entity: Question
- **student** (string)  
- **publicationDate** (Date)  
- **content** (string)  
- **courseId** (reference to Course)

**Relationship**:  
- One **Course** has many **Questions**.  
- A **student** can post multiple **Questions**, each linked to a specific Course.

---

## ❓ FAQ

**How do I create a new course?** In the "Courses" section, click on "Create Course" and fill out the form with the name, description, credits, professor, and image.

**How do I post a question?** Inside the course page, fill out the "Post question" form with your name and the content of your question. It will be saved with the current date.

**Can I edit or delete questions?** Only the professor (or an administrator role) can mark a question as resolved or delete it if necessary.

**How do I change the application port?** Modify the `PORT` variable in your `.env` file before starting the server.
