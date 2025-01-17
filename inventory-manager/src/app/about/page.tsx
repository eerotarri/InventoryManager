import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function About() {
  return (
    <div className="max-w-7xl align-middle mx-auto p-4 sm:px-6 lg:px-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        About Inventory Manager
      </h2>
      <Accordion type="multiple">
        <AccordionItem value={"add-item"}>
          <AccordionTrigger>
            <p>How to add a new item</p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              To add a new item, go to the inventory page and click on the
              &quot;Add Item&quot; button. Fill in the details and save.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"edit-item"}>
          <AccordionTrigger>
            <p>How to edit an item</p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              To edit an item, go to the inventory page, select the item you
              want to edit, and click on the &quot;Edit&quot; button. Make the
              necessary changes and save.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"delete-item"}>
          <AccordionTrigger>
            <p>How to delete an item</p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              To delete an item, go to the inventory page, select the item you
              want to delete, and click on the &quot;Delete&quot; button.
              Confirm the deletion.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default About;
