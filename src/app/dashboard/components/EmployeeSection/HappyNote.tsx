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
import { PartyPopper } from "lucide-react" // Optional: adds a celebration icon

export function HappyNote() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-orange-500 px-3 py-1 rounded text-xs hover:bg-orange-600 transition cursor-pointer"
        >
          Happy Note
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => e.preventDefault()}>
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
              <Label htmlFor="name-1">Recipient</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue="Pedro Duarte"
                className="bg-orange-50/50 border-orange-100"
              />
            </div>

            {/* Recognition Message */}
            <div className="grid gap-2">
              <Label htmlFor="note">The Good News / Praise</Label>
              <Textarea
                id="note"
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
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Send Praise
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}