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
import { Checkbox } from "@/components/ui/checkbox" // Assuming you have shadcn checkbox
import { BellRing } from "lucide-react"

export function Notification() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-teal-500 px-3 py-1 rounded text-xs hover:bg-teal-600 transition cursor-pointer"
        >
          Notification
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogHeader>
            <div className="flex items-center gap-2 text-teal-600 mb-1">
              <BellRing className="h-5 w-5" />
              <DialogTitle>Send Notification</DialogTitle>
            </div>
            <DialogDescription>
              Send an internal update or announcement to this employee's dashboard.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Subject Line */}
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="e.g., Policy Update, Schedule Change"
                className="focus-visible:ring-teal-500"
              />
            </div>

            {/* Notification Body */}
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
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
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white">
              Send Notification
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}