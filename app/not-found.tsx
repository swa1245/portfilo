import Link from "next/link"
import { Mail, Github, Linkedin, Twitter, Home, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-24">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-semibold">404</h1>
        <p className="text-muted-foreground">This page could not be found.</p>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="icon" aria-label="Home">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="mailto:example@email.com">
          <Button variant="ghost" size="icon" aria-label="Email">
            <Mail className="h-5 w-5" />
          </Button>
        </Link>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
          <Sun className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

