import Courses from "@/components/Education/CoursesComponent";
import Extracurricular from "@/components/Education/ExtracurricularComponent";
import Graduate from "@/components/Education/GraduateComponent";
import Certificate from "@/components/Education/ProfessionalCertifications";

const EducationSection = () => {
   return(
      <>
         <Graduate />
         <Certificate />
         <Courses />
         <Extracurricular />
      </>
   );
};

export default EducationSection;