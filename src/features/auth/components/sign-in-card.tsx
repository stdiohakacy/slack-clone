import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { SignInFlow } from "../types"
import { useState } from "react"

interface SignInCardProps {
    setState: (state: SignInFlow) => void;
}

export const SignInCard = ({ setState } : SignInCardProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")
    
    return (
        <Card className="w-full h-full p-8">
            <CardTitle className="px-0 pt-0">
                Login to continue
            </CardTitle>
            <CardDescription>
                Use your email or another service to continue
            </CardDescription>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input disabled={false} value="" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" type="email" required />
                    <Input disabled={false} value="" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" type="password" required />
                    <Button type="submit" className="w-full" size="lg" disabled={false} >Continue</Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button disabled={false} onClick={() => {}} variant="outline" className="w-full relative" size="lg">
                        <FcGoogle className="size-5 absolute top- left-2.5 "/>
                        Continue with Google
                    </Button>
                    <Button disabled={false} onClick={() => {}} variant="outline" className="w-full relative" size="lg">
                        <FaGithub className="size-5 absolute top- left-2.5 "/>
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don&apos;t have an account? <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor-pointer">Sign up</span>
                </p>
            </CardContent>
        </Card>
    )
}