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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEmployees } from "@/Hook/useEmployees";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";



export function Action() {
  const { employees } = useEmployees();

  const [open, setOpen] = useState(false); // 2. Add open state

  const employee = employees[0]

  const router = useRouter();

  const handlerAction = async (e: React.FormEvent<HTMLFormElement>) => {
    // FIX 1: Prevent page reload
    e.preventDefault();
    // FIX 2: Use FormData to extract values based on the "name" attributes
    const formData = new FormData(e.currentTarget);

    const actionData = {
      category: formData.get("category"),
      date: formData.get("date"),
      comment: formData.get("comment"),
      email: employee?.email

    };

    

    console.log("Form Submitted:", actionData);

    try {
      const res = await fetch(
        "https://darkstone-dashboard-server.vercel.app/action",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(actionData),
        }
      );

      const result = await res.json();
      toast.success(result.message || "Employee added successfully!");

      router.push("/dashboard/admin/employees");
setOpen(false); 
      // toast.success("Employee added successfully!");
      console.log(result.message);
    } catch (error) {
      console.error(error);

      return toast.error("Failed to add employee. Please try again");
    }





  };






  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded text-xs transition cursor-pointer"
        >
          Action
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Administrative Action</DialogTitle>
          <DialogDescription>
            Update status or record notes for <strong> {employee?.fullName} </strong>.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handlerAction}>
          <div className="grid gap-5 py-4">
            {/* Action Type Selection */}
            <div className="grid gap-2">
              <Label htmlFor="action-type">Action Category</Label>

              {/* FIX 3: Added name="category" so FormData can find it */}
              <Select name="category" defaultValue="performance">
                <SelectTrigger id="action-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="performance">
                    Performance Review
                  </SelectItem>
                  <SelectItem value="promotion">
                    Promotion/Role Change
                  </SelectItem>
                  <SelectItem value="warning">Official Warning</SelectItem>
                  <SelectItem value="training">Training Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Effective Date */}
            <div className="grid gap-2">
              <Label htmlFor="date">Effective Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Comment Area */}
            <div className="grid gap-2">
              <Label htmlFor="comment">Detailed Remarks</Label>
              <Textarea
                id="comment"
                name="comment"
                placeholder="Describe the action taken..."
                className="min-h-[100px]"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" className="bg-indigo-600 cursor-pointer hover:bg-indigo-700">
              Confirm Action
            </Button>

          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
