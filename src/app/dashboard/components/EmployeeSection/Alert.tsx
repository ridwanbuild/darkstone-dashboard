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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEmployees } from "@/Hook/useEmployees";
import { AlertCircle } from "lucide-react"; // Optional: for a visual icon
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export function Alert() {
  // all employees data
  const { employees } = useEmployees();

  const employee = employees[0];

  const router = useRouter();

  const handlerAlert = async (e: any) => {
    e.preventDefault();

    const formData = e.target;

    const employeeName = formData.employeeName.value;
    const iqNumber = formData.iqNumber.value;
    const severityLevel = formData.severityLevel.value;
    const reason = formData.reason.value;

    console.log({ employeeName, iqNumber, severityLevel, reason });

    try {
      const res = await fetch(
        "https://darkstone-dashboard-server.vercel.app/alert",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const result = await res.json();
      toast.success(result.message || "Employee alert successfully!");
      router.push("/dashboard/admin/employees");
    } catch (error) {
      console.error(error);
      // Show an error toast to inform the user something went wrong
      return toast.error("Failed to add employee. Please try again");
    }








  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-red-600 px-3 py-1 rounded text-xs hover:bg-red-700 transition cursor-pointer"
        >
          Alert
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] border-red-200">
        <form onSubmit={handlerAlert}>
          <DialogHeader>
            <div className="flex items-center gap-2 text-red-600 mb-1">
              <AlertCircle className="h-5 w-5" />
              <DialogTitle>Issue Official Alert</DialogTitle>
            </div>
            <DialogDescription>
              This action will be recorded in the employee's permanent record.
              Please specify the severity and reason.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Employee Info (Read-only style) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="name"
                  className="text-xs uppercase text-gray-500"
                >
                  Employee
                </Label>
                <Input
                  name="employeeName"
                  id="name"
                  defaultValue={employee?.fullName}
                  readOnly
                  className="bg-gray-50 cursor-not-allowed text-gray-300"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="id" className="text-xs uppercase text-gray-500">
                  Iqama Number
                </Label>
                <Input
                  name="iqNumber"
                  id="id"
                  defaultValue={employee?.iqamaNumber}
                  readOnly
                  className="bg-gray-50 text-gray-300 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Severity Level */}
            <div className="grid gap-2">
              <Label htmlFor="severity">Severity Level</Label>
              <Select name="severityLevel" defaultValue="low">
                <SelectTrigger id="severity" className="border-red-100">
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="low">Low - Informal Warning</SelectItem>
                  <SelectItem value="medium">
                    Medium - Formal Written Alert
                  </SelectItem>
                  <SelectItem value="high">High - Final Notice</SelectItem>
                  <SelectItem value="critical">
                    Critical - Immediate Suspension
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Alert Reason */}
            <div className="grid gap-2">
              <Label htmlFor="reason">Reason for Alert</Label>
              <Input
                id="reason"
                name="reason"
                placeholder="e.g. Policy violation, Attendance, etc."
                className="border-red-100 focus-visible:ring-red-500"
              />
            </div>
          </div>

          <DialogFooter className="sm:justify-between cursor-pointer">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" variant="destructive">
              Confirm Alert
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
