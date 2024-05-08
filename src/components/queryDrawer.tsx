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
import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { useToast } from "@/components/ui/use-toast"


export default function QueryDrawer() {
    const { toast } = useToast()

    let [details, setDetails] = useState({
        name: "",
        email: "",
        content: "",
    })
    
    let [verify, setVerify] = useState(false)
    let [errorMessage, setErrorMessage] = useState('')

    let nameRef = useRef<HTMLInputElement>(null)
    let emailRef = useRef<HTMLInputElement>(null)
    let contentRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (details.email !== '' && details.name !== '' && details.content !== '') {
            setVerify(true)
        }
        else {
            setVerify(false)
        }
    },
        [
            setVerify,
            details,
            drawer,
        ])
    
    async function resetValues() {
        if (nameRef.current && emailRef.current && contentRef.current) {
            nameRef.current.value = ''
            emailRef.current.value = ''
            contentRef.current.value = ''
            setErrorMessage('')
        }
    }

    async function drawer() {
        details.email = ''
        details.name = ''
        details.content = ''
        resetValues()
    }
    
    async function sendQuery() {
        // send query action
        if (verify) {
            if (details.content.length < 5 || details.content.length > 500) {
                setErrorMessage('Message should be in the range of 5 to 500')
                return
            }
            axios.post("/api/query/send",
                {
                    name: details.name,
                    email: details.email,
                    content: details.content,
                })
                .then((res) => {
                    const data = res.data
                    if (!data.success) {
                        setErrorMessage(data.message)
                    }
                    else {
                        drawer()
                        toast({
                            duration: 5000,
                            description: "Your Response was sent successfully!",
                        })
                    }
                })
                .catch((err) => {
                    setErrorMessage(`${err.message}`)
                })
        }
        else {
            setErrorMessage('Pls fill the Details!')
        }
    }

    return (
        <Drawer
            onOpenChange={drawer}
            onClose={drawer}> 
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
                                    ref={nameRef}
                                    onChange={(e) => {
                                        setDetails({...details, name: e.target.value})
                                    }}
                                    type="text"
                                    placeholder="Name" />
                            </div>
                            <div
                                className="mx-5 p-2 my-1">
                                <Input
                                    ref={emailRef}
                                    onChange={(e) => {
                                        setDetails({ ...details, email: e.target.value })
                                    }}
                                    type="email"
                                    placeholder="Email" />
                            </div>
                            <div
                                className="mx-5 p-2 my-1">
                                <Textarea
                                    ref={contentRef}
                                    onChange={(e) => {
                                        setDetails({ ...details, content: e.target.value })
                                    }}
                                    placeholder="Type your message here." />
                            </div>
                            <div
                                className="mx-5 p-2 my-1">
                                <p className="text-red-600 text-md">
                                    {errorMessage}
                                </p>
                            </div>
                        </div>
                    </DrawerHeader>
                    <DrawerFooter>
                        <div className="flex flex-row 
                        items-center justify-center">
                            <button
                                onClick={sendQuery}
                                className={`
                                bg-neutral-950 text-white 
                                px-6 py-2 rounded-xl mx-3`}>
                                Submit
                            </button>
                            <DrawerClose asChild>
                                <button
                                    className="bg-neutral-950 text-white 
                                px-6 py-2 rounded-xl mx-3">
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