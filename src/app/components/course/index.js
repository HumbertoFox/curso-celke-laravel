function Course({ children, teacher, course }) {
    return (
        <div className="my-5">

            <p>Nome do Curso: {children}</p>
            <p>Nome do Professor(a): {teacher}</p>
            <p>Preço: {course.price}</p>
            <p>Carga Horária: {course.workload}</p>

        </div>
    );
}

export default Course;