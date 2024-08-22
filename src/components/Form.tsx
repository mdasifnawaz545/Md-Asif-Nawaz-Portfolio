// import { messageSchema } from '@/schema/messageSchema'
// import { Resolver } from 'dns'
// import React from 'react'
// import { useForm } from "react-hook-form"
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// function Form() {
//   const form = useForm<z.infer<typeof messageSchema>>({
//     resolver:zodResolver(messageSchema);

//   });
//   const onSubmit=async(data:z.infer<typeof messageSchema>)=>{
    

//   }
//   return (
//     <div>
//        <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//     </div>
//   )
// }

// export default Form

