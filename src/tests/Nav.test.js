import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Nav from '../components/Nav';

describe('Nav component', () => {
    it("renders home nav link", () => {
        const { container } = render(<Nav />, { wrapper: BrowserRouter });
        expect(container).toMatchSnapshot();
    });

    it("renders home page after nav button click", () => {
        const history = createMemoryHistory({ initialEntries: ["/"] });

        render(
            <Router location={history.location} navigator={history}>
                <Nav />
            </Router>
        );

        const homeLink = screen.getByRole("link", { name: "Home" });
        userEvent.click(homeLink);

        expect(history.location.pathname).toBe('/');
    });

    it("renders products page after nav button click", () => {
        const history = createMemoryHistory({ initialEntries: ["/"] });

        render(
            <Router location={history.location} navigator={history}>
                <Nav />
            </Router>
        );

        const homeLink = screen.getByRole("link", { name: "Products" });
        userEvent.click(homeLink);

        expect(history.location.pathname).toBe('/products');
    });
});
