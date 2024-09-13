<<<<<<< HEAD
import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="text-3xl font-bold">
      Hello there
    </div>
      );
}
=======
"use client";

import { useBalance } from "@repo/store/balance";

export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}
>>>>>>> db15ecb (till p2p)
