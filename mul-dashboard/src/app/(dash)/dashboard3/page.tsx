import DashboardHeader from "@/components/dash-header";
import DashboardThreeCardWripper from "@/components/dashboard-three/DashboardThreeCardWripper";

const Dashboar3 = () => {
  return (
    <>
      <section className="md:px-6 px-1 py-6">
        <DashboardHeader text="Dashboard 3" />
        <DashboardThreeCardWripper />
      </section>
    </>
  );
};

export default Dashboar3;
