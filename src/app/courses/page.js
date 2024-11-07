import Course from "../components/course";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Courses = () => {
    return (
        <div className="text-center">
            <Menu />

            <h2>Cursos</h2>

            <Course teacher={"cesar"} course={{ price: 967, workload: "20 horas" }}>Node.Js</Course>
            <Course teacher={'Humberto'} course={{ price: 1457, workload: "50 horas" }}>React</Course>
            <Course teacher={'Jessica'} course={{ price: 437, workload: "10 horas" }}>React</Course>
            <Course teacher={'Gabrielly'} course={{ price: 1977, workload: "60 horas" }}>React</Course>

            <Footer />
        </div>
    );
}

export default Courses;