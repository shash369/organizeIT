"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function FreeUpgradeModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            Congratulations 🎉
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground mt-2">
          From the developer ❤️ — you have been granted a <b>FREE upgrade</b>.
        </p>

        <p className="text-sm mt-2">
          Enjoy the premium features and have fun using the platform 🚀
        </p>

        <div className="flex justify-end mt-5">
          <Button onClick={onClose}>Awesome 😄</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
