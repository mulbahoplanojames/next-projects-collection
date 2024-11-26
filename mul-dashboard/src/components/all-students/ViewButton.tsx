import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ScanEye } from "lucide-react";

const ViewButton = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className=" bg-purple-300">
            <ScanEye size={24} className="text-white" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Student Info</AlertDialogTitle>
            <AlertDialogDescription>
              <p className="text-sm font-bold pb-2">
                Name: Oplano James Mulbah
              </p>
              <p className="text-sm font-bold pb-2">Email: oplanojames@gmail</p>
              <p className="text-sm font-bold pb-2">
                Course: Software Engineering
              </p>
              <p className="text-sm font-bold pb-2">Branch: Computer Science</p>
              <p className="text-sm font-bold pb-2">Assigned Professor:</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Exit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ViewButton;
