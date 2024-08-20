import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CsSidebar } from "@/components/circles/CsSidebar";
import { CsHeader } from "@/components/circles/CsHeader";

export default function Dashboard() {
  return (
    <>
      <ul>
        <li>
          <Link href="/open1">Open1</Link>
        </li>
        <li>
          <Link href="/vancouver">Vancouver</Link>
        </li>
        <li>
          <Link href="/trane">Trane.</Link>
        </li>
      </ul>
    </>
  );
}
