
"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const ContactUs = () => {
    return (
        <div className='flex w-full mt-8 bg-blue-400 flex-col'>
            <div className='flex flex-col w-full items-center p-10'>
                <div className='text-lg'>Have Questions?</div>
                <div className='text-2xl'>Contact us</div>
            </div>
            <div className='flex justify-center lg:px-24 pb-24 items-center lg:flex-row flex-col'>
                <div className='  w-1/2 '>
                    <div className='flex flex-col'>
                        <div>Address</div>
                        <div>bero excepturi facilis.</div>
                    </div>
                    <div>
                        <div>Phone</div>
                        <div> +91 7397379958</div>
                    </div>
                    <div>
                        <div>Email</div>
                        <div>mynameisrizwan35@gmail.com</div>
                    </div>
                    <div>
                        <div>Website</div>
                        <div>aiht.in</div>
                    </div>
                </div>
                <div className='w-1/2'>

                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default ContactUs