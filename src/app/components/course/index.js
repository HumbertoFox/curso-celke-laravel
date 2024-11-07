function Course({ children, teacher, courses }) {
    return (
        <div className="my-5">

            <p>Nome do Curso: {children}</p>
            <p>Nome do Professor(a): {teacher}</p>
            <p>Preço: {courses.price}</p>
            <p>Carga Horária: {courses.workload}</p>

        </div>
    );
}

export default Course;