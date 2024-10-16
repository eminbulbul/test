import React, { useEffect } from "react";
import EducatorCard from "./EducatorCard";
import useFetchApi from "@/Hooks/useFetchApi";
import Spinner from "@/UI/Spinner";

const index = () => {
  const [getTeam, teams, loading] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/our-team"
  );
  useEffect(() => {
    getTeam();
  }, []);
  return (
    <div className="container my-5">
      {loading ? (
        <Spinner />
      ) : (
        <div className="pb-32">
          <h3 className="my-5">Öğretmen Kadromuz</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 my-10 gap-5 ">
            {teams !== null &&
              teams?.map((team: any) => (
                <EducatorCard
                  key={team?.id}
                  image={team?.image_url}
                  educator={team?.name}
                  title={team?.expertise}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
