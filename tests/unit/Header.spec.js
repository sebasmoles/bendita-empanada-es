import { render, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
	test("on inital render, user can't see burger menu options", () => {
		const { getByTestId } = render(Header);

		const burgerMenuOptions = getByTestId("burger-menu-options");

		expect(burgerMenuOptions).not.toBeVisible();
	});
	test("user can toggle burger menu options visibility", async () => {
		const { getByTestId } = render(Header);

		const burgerMenu = getByTestId("burger-menu");
		const burgerMenuClose = getByTestId("burger-menu-close");
		const burgerMenuOptions = getByTestId("burger-menu-options");

		await fireEvent.click(burgerMenu);
		expect(burgerMenuOptions).toBeVisible();

		await fireEvent.click(burgerMenuClose);
		expect(burgerMenuOptions).not.toBeVisible();
	});
});
