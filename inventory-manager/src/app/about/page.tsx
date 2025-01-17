import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import AddInstruction from "./_instructions/add-instruction";
import DeleteInstruction from "./_instructions/delete-instruction";
import EditInstruction from "./_instructions/edit-instruction";

function About() {
  return (
    <div className="max-w-7xl align-middle mx-auto p-4 sm:px-6 lg:px-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ohjeita InventaarioAPPin käyttämiseen
      </h2>
      <Accordion type="multiple">
        <AccordionItem value={"add-item"}>
          <AccordionTrigger>
            <p>Kuinka lisätä tuote jääkaappiin</p>
          </AccordionTrigger>
          <AccordionContent>
            <AddInstruction />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"edit-item"}>
          <AccordionTrigger>
            <p>Kuinka muokata tuotetta jääkaapissa</p>
          </AccordionTrigger>
          <AccordionContent>
            <EditInstruction />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"delete-item"}>
          <AccordionTrigger>
            <p>Kuinka poistaa tuote jääkaapista</p>
          </AccordionTrigger>
          <AccordionContent>
            <DeleteInstruction />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default About;
