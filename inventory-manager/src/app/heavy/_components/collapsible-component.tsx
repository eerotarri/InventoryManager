// Simulate a heavy component that might be resource-intensive
import SlowComponent from "./slow-component";

export default function CollapsibleComponent() {

    return (
        <div className="p-4">
            <SlowComponent />
        </div>
    );
}