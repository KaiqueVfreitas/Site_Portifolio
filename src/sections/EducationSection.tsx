import Courses from "@/components/Education/CoursesComponent";
import Extracurricular from "@/components/Education/ExtracurricularComponent";
import Graduate from "@/components/Education/GraduateComponent";
import Certificate from "@/components/Education/ProfessionalCertifications";
import Technical from "@/components/Education/TechnicalComponent";

const EducationSection = () => {
   return(
      <div className="h-10 w-10">
         <Graduate />
         <Certificate />
         <Courses />
         <Extracurricular />
         <Technical />
      </div>
   );
};

export default EducationSection;