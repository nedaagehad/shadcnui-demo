import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { validateUser } from "./validateUser";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    username: z.string().min(3, "Must be at least 3 characters!").max(50, "Must be 50 characters maximum!"),
    password: z.string().min(8, "must be at least 8 characters!").max(20, "Must be max of 20 characters")
  })

const Login = () => {
    const { toast } = useToast();
    const router = useRouter()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (validateUser(values)) {
        localStorage.setItem("loggedIn", "yes")
        router.push("/dashboard")
    }
    else toast({
        variant: "destructive",
        title: "Failed to login!",
        description: "Invalid Credentials.",
        className: "fixed top-0 left-[50%] z-[100] flex max-h-screen w-full translate-x-[-50%] flex-col-reverse p-1 sm:right-0 sm:flex-col md:max-w-[420px]"
      })

  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-30 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField control={form.control} name="username" render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="password" render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default Login