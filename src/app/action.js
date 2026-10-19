"use server"

export async function addCourse(formData) {
    const name = formData.get("name");
    const course = formData.get("course");
    console.log("Name:", name);
    console.log("Course:", course);
    return {
        success: true,
        message: "Course added successfully",
    }
    // Here you can implement the logic to add the course to your database or perform any other server-side operations.
    // For example, you might use a database query or an API call.
}