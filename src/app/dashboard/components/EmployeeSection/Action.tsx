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

export function Action() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <Button
          variant="outline"
          className="text-white hover:text-white bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded text-xs 0 transition cursor-pointer"
        >
          Action
        </Button>

      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => { e.preventDefault(); /* Handle logic here */ }}>
          <DialogHeader>
            <DialogTitle>Administrative Action</DialogTitle>
            <DialogDescription>
              Update status or record notes for <strong>Pedro Duarte</strong>.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-5 py-4">
            {/* Action Type Selection */}
            <div className="grid gap-2">
              <Label htmlFor="action-type">Action Category</Label>
              <Select defaultValue="performance">
                <SelectTrigger id="action-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="performance">Performance Review</SelectItem>
                  <SelectItem value="promotion">Promotion/Role Change</SelectItem>
                  <SelectItem value="warning">Official Warning</SelectItem>
                  <SelectItem value="training">Training Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Effective Date */}
            <div className="grid gap-2">
              <Label htmlFor="date">Effective Date</Label>
              <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>

            {/* Comment Area */}
            <div className="grid gap-2">
              <Label htmlFor="comment">Detailed Remarks</Label>
              <Textarea
                id="comment"
                placeholder="Describe the action taken..."
                className="min-h-[100px]"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              Confirm Action
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}