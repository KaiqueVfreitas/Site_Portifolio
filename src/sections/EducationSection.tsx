import Courses from "@/components/Education/CoursesComponent";
import Extracurricular from "@/components/Education/ExtracurricularComponent";
import Graduate from "@/components/Education/GraduateComponent";
import Certificate from "@/components/Education/ProfessionalCertifications";
import Technical from "@/components/Education/TechnicalComponent";

const EducationSection = () => {
   return(
      <>
         <Graduate />
         <Certificate />
         <Courses />
         <Extracurricular />
         <Technical />
      </>
   );
};

export default EducationSection;