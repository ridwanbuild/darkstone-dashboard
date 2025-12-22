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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ClipboardList } from "lucide-react"

export function Requests_Employee() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-green-500 px-3 py-1 rounded text-xs hover:bg-green-600 transition cursor-pointer"
        >
          Request
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogHeader>
            <div className="flex items-center gap-2 text-green-600 mb-1">
              <ClipboardList className="h-5 w-5" />
              <DialogTitle>Submit Employee Request</DialogTitle>
            </div>
            <DialogDescription>
              Submit a formal request for review by the administrative team.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Request Category */}
            <div className="grid gap-2">
              <Label htmlFor="request-type">Type of Request</Label>
              <Select defaultValue="leave">
                <SelectTrigger id="request-type" className="focus:ring-green-500">
                  <SelectValue placeholder="Select request type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leave">Time Off / Leave</SelectItem>
                  <SelectItem value="equipment">Equipment/Tools</SelectItem>
                  <SelectItem value="schedule">Schedule Change</SelectItem>
                  <SelectItem value="reimbursement">Expense Reimbursement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Request Title */}
            <div className="grid gap-2">
              <Label htmlFor="title">Subject</Label>
              <Input
                id="title"
                placeholder="e.g., Annual Leave Request"
                className="focus-visible:ring-green-500"
              />
            </div>

            {/* Details */}
            <div className="grid gap-2">
              <Label htmlFor="details">Details / Reason</Label>
              <Textarea
                id="details"
                placeholder="Please provide more information about your request..."
                className="min-h-[100px] focus-visible:ring-green-500"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
              Submit Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}