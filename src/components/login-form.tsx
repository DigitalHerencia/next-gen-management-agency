import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card
      className="mx-auto max-w-sm bg-card text-card-foreground border border-border rounded-lg shadow-lg"
      style={{
        boxShadow: "0 8px 16px hsl(var(--ring))",
      }}
    >
      <CardHeader className="p-6">
        <CardTitle
          className="text-3xl font-bold tracking-wide text-primary-foreground"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
          }}
        >
          Login
        </CardTitle>
        <CardDescription className="mt-2 text-muted-foreground">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-primary-foreground"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="rounded-md border border-input bg-secondary text-secondary-foreground focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-primary-foreground"
              >
                Password
              </Label>
              <Link
                href="#"
                className="text-sm text-accent underline hover:text-accent-foreground"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="rounded-md border border-input bg-secondary text-secondary-foreground focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
          >
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="text-accent underline hover:text-accent-foreground"
          >
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
