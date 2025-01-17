import { render, screen } from "@testing-library/react";
import Hero from "../src/components/Hero";
import React from "react";

describe("ProductContent", () => {
    it("should render correctly", () => {
        render(<Hero />);
        expect(screen.getByText("Example"));
    });
});
