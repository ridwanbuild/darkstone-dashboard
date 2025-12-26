import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEmployees } from "@/Hook/useEmployees"
import { PartyPopper } from "lucide-react" // Optional: adds a celebration icon
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export function HappyNote() {

  const [open, setOpen] = useState(false); // 2. Add open state

  const { employees } = useEmployees();

  const employee = employees[0];

  const router = useRouter();

  const handlerHayppyNote = async (e: any) => {
    e.preventDefault();

    const formData = e.target;

    const happyData = {
      fullName: formData.fullName.value,
      message: formData.message.value,
      email: employee?.email
    };

    console.log(happyData)

    try {
      const res = await fetch(
        "https://darkstone-dashboard-server.vercel.app/happy",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(happyData)
        }
      );

      const result = await res.json();
      toast.success(result.message || "Employee added happy note!");

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
          className="text-white hover:text-white bg-orange-500 px-3 py-1 rounded text-xs hover:bg-orange-600 transition cursor-pointer"
        >
          Happy Note
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handlerHayppyNote}>
          <DialogHeader>
            <div className="flex items-center gap-2 text-orange-600 mb-1">
              <PartyPopper className="h-5 w-5" />
              <DialogTitle>Send a Happy Note</DialogTitle>
            </div>
            <DialogDescription>
              Acknowledge great work! This positive note will be sent to the
              employee and recorded as a highlight.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Employee Target */}
            <div className="grid gap-2">
              <Label htmlFor="name-1">Recipient Name</Label>
              <Input
                id="name-1"
                name="fullName"
                defaultValue={employee?.fullName}
                readOnly
                className="bg-orange-50/50 text-gray-300 border-orange-100 cursor-not-allowed"
              />
            </div>

            {/* Recognition Message */}
            <div className="grid gap-2">
              <Label htmlFor="note">The Good News / Praise</Label>
              <Textarea
                id="note"
                name="message"
                placeholder="e.g., Amazing job handling the client presentation! Everyone was impressed."
                className="min-h-[100px] border-orange-100 focus-visible:ring-orange-500"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button 
              type="submit" 
              className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
            >
              Send Praise
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}