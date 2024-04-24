import { FC } from "react";
import Navbar from "../../classrooms/components/Navbar";
import { useGetStudySetCardsQuery } from "@/services/cards";
import { useLocation } from "react-router-dom";
import Card from "./components/Card";
import { Button } from "@/components/ui/button";
import { PiCards } from "react-icons/pi";
import { GrAdd } from "react-icons/gr";
import AddCardDialog from "./components/AddCardDialog";
interface SetProps {
  id: number;
}
const Set: FC<SetProps> = ({ id }) => {
  console.log(id);

  const location = useLocation();
  const currentStudySetId = location.pathname.slice(
    location.pathname.length - 2,
    location.pathname.length
  );
  const { data } = useGetStudySetCardsQuery(currentStudySetId);
  console.log(data);

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="max-w-[65%] mx-auto flex justify-between">
          <h3 className="text-center mb-10 text-2xl">{localStorage.getItem("Set")}</h3>
          <div className="flex gap-2">
          <Button className="flex gap-1" variant={"outline"}>
            Practice <PiCards size={17} />
          </Button>
          <AddCardDialog />
          </div>
        </div>
        <div className="flex justify-center">
          {data?.map((card: any, i: number) => (
            <Card key={i} front={card.front} back={card.back} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Set;
