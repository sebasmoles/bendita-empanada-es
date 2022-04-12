import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import Contacto from "@/components/home-ui/Contacto.vue";

describe("Contacto.vue", () => {
	test("all inputs are required before sending the form", () => {
		const { getByTestId } = render(Contacto);

		const inputName = getByTestId("input-name");
		const inputEmail = getByTestId("input-email");
		const inputPhone = getByTestId("input-phone");
		const inputTextarea = getByTestId("input-textarea");

		expect(inputName).toBeRequired();
		expect(inputEmail).toBeRequired();
		expect(inputPhone).toBeRequired();
		expect(inputTextarea).toBeRequired();
	});
});
