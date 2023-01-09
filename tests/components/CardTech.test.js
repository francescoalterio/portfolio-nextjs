import CardTech from "../../components/CardTech";
import { render, screen } from "@testing-library/react";

describe('CardTech', () => {
    test('se esta renderizando correctamente', () => {
        render(<CardTech content="Javascript" />);
        screen.getByText("Javascript")
    })
})