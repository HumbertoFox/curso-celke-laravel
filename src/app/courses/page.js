import Course from "../components/course";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Courses = () => {
    return (
        <div className="text-center">
            <Menu />

            <h2>Cursos</h2>

            <Course teacher={"cesar"} courses={{ price: 967, workload: "20 horas" }}>Node.Js</Course>
            <Course teacher={'Humberto'} courses={{ price: 1457, workload: "50 horas" }}>React</Course>
            <Course teacher={'Jessica'} courses={{ price: 437, workload: "10 horas" }}>React</Course>
            <Course teacher={'Gabrielly'} courses={{ price: 1977, workload: "60 horas" }}>React</Course>

            <Footer />
        </div>
    );
}

export default Courses;