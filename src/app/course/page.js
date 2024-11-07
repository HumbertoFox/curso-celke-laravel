"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Course = () => {
    const [courseId, setCourseId] = useState();
    const [teacher, setTeacher] = useState();
    const [dataCourse, setDataCourse] = useState({
        name: '',
        price: '',
        workload: '',
    });

    function loadCourse() {
        setCourseId(7);
        setTeacher("Cesar");
        setDataCourse({
            name: "React",
            price: "1457",
            workload: "50 horas",
        });
    }

    useEffect(() => {
        loadCourse();
    }, [courseId]);

    return (
        <div className="text-center">

            <Menu />

            <h2>Curso</h2>
            <p>ID do Curso: {courseId}</p>
            <p>Nome do Professor(a): {teacher}</p>
            <p>Nome do Curso: {dataCourse.name}</p>
            <p>Preço: {dataCourse.price}</p>
            <p>Carga Horária: {dataCourse.workload}</p>

            <Footer />

        </div>
    );
}

export default Course;