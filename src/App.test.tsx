import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio", () => {
  it("presents the core positioning and selected work", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "I turn messy problems into working software.",
    );

    for (const project of ["Trackline", "ClientOps Copilot", "Outside Edge", "BirdTag"]) {
      expect(screen.getByRole("heading", { name: project })).toBeInTheDocument();
    }

    expect(screen.getAllByRole("link", { name: /Resume/ })[0]).toHaveAttribute(
      "href",
      "/Paarth_Sharma_resume.pdf",
    );
    expect(screen.getAllByRole("link", { name: /Live product/ })[0]).toHaveAttribute(
      "href",
      "https://job-tracker-eosin-one.vercel.app/",
    );
  });

  it("opens the mobile navigation and closes it with Escape", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", { name: /Menu/ });
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });
});
