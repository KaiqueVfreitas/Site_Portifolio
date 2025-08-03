import Courses from "@/components/Education/CoursesComponent";
import Graduate from "@/components/Education/GraduateComponent";
import Certificate from "@/components/Education/ProfessionalCertifications";

const EducationSection = () => {
   return(
      <>
         <Graduate />
         <Certificate />
         <Courses />
      </>
   );
};

export default EducationSection;