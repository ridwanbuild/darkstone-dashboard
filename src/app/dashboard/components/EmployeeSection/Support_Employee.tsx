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
import { LifeBuoy } from "lucide-react";

export function Support_Employee() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-700 transition cursor-pointer"
        >
          Support
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogHeader>
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <LifeBuoy className="h-5 w-5" />
              <DialogTitle>Employee Support</DialogTitle>
            </div>
            <DialogDescription>
              Need help with payroll, IT, or HR? Submit a support ticket below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Subject/Topic */}
            <div className="grid gap-2">
              <Label htmlFor="issue-type">Issue Category</Label>
              <Select defaultValue="hr">
                <SelectTrigger id="issue-type" className="focus:ring-blue-500">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="it">IT & Technical Support</SelectItem>
                  <SelectItem value="payroll">Payroll & Benefits</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Support Subject */}
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Brief summary of the issue"
                className="focus-visible:ring-blue-500"
              />
            </div>

            {/* Support Message */}
            <div className="grid gap-2">
              <Label htmlFor="description">How can we help you?</Label>
              <Textarea
                id="description"
                placeholder="Please describe your problem in detail..."
                className="min-h-[100px] focus-visible:ring-blue-500"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" type="button">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Submit Ticket
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}