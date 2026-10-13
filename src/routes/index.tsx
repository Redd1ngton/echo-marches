import { createFileRoute } from "@tanstack/react-router";
import { EchoApp } from "@/components/echo/EchoApp";

export const Route = createFileRoute("/")({
  component: EchoApp,
});
