import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming you have shadcn checkbox
import { BellRing } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEmployees } from "@/Hook/useEmployees";
import toast from "react-hot-toast";
import { useState } from "react";

export function Notification() {
  const { employees } = useEmployees();

  const [open, setOpen] = useState(false); // 2. Add open state
  const employee = employees[0];

  const router = useRouter();

  const handlerNotification = async (e: any) => {
    e.preventDefault();

    const formData = e.target;



    
    const notificationData = {
      subjectName: formData.subjectName.value,
      message: formData.message.value,
      email: employee?.email
    };

    console.log(notificationData)


    try {
      const res = await fetch(
        "https://darkstone-dashboard-server.vercel.app/notification",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(notificationData)
        }
      );

      const result = await res.json();
      toast.success(result.message || "Employee added notification note!");
      router.push("/dashboard/admin/employees");
      setOpen(false); 
    } catch (error) {
      console.error(error);
      // Show an error toast to inform the user something went wrong
      return toast.error("Failed to add employee. Please try again");
    }



  };

  return (
   <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-teal-500 px-3 py-1 rounded text-xs hover:bg-teal-600 transition cursor-pointer"
        >
          Notification
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handlerNotification}>
          <DialogHeader>
            <div className="flex items-center gap-2 text-teal-600 mb-1">
              <BellRing className="h-5 w-5" />
              <DialogTitle>Send Notification</DialogTitle>
            </div>
            <DialogDescription>
              Send an internal update or announcement to this employee's
              dashboard.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Subject Line */}
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subjectName"
                placeholder="e.g., Policy Update, Schedule Change"
                className="focus-visible:ring-teal-500"
              />
            </div>

            {/* Notification Body */}
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your announcement here..."
                className="min-h-[100px] focus-visible:ring-teal-500"
              />
            </div>

            {/* Priority Checkbox */}
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="priority" />
              <label
                htmlFor="priority"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mark as high priority
              </label>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white cursor-pointer" 
            >
              Send Notification
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
