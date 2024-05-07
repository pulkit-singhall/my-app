import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

async function sendQuery() {
    // send query action

}

export default function QueryDrawer() {
    return (
        <Drawer>
            <DrawerTrigger
                className="text-white text-2xl bg-neutral-950 mt-5 
                px-8 py-2 rounded-full">
                Raise a Query
            </DrawerTrigger>
            <DrawerContent className="rounded-t-3xl">
                <div className="m-5">
                    <DrawerHeader>
                        <div className="flex flex-col">
                            <div
                                className="mx-5 p-2 my-1">
                                <Input
                                    type="text"
                                    placeholder="Name" />
                            </div>
                            <div
                                className="mx-5 p-2 my-1">
                                <Input
                                    type="email"
                                    placeholder="Email" />
                            </div>
                            <div
                                className="mx-5 p-2 my-1">
                                <Textarea
                                    placeholder="Type your message here." />
                            </div>
                        </div>
                    </DrawerHeader>
                    <DrawerFooter>
                        <div className="flex flex-row 
                        items-center justify-center">
                            <button
                                onClick={sendQuery}
                                className="bg-neutral-950 text-white 
                                px-5 py-2 rounded-xl mx-3">
                                Submit
                            </button>
                            <DrawerClose asChild>
                                <button
                                    className="bg-neutral-950 text-white 
                                px-5 py-2 rounded-xl mx-3">
                                    Cancel
                                </button>
                            </DrawerClose>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}