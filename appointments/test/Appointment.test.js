import React from "react";
import ReactDOM from "react-dom/client";
import {act} from "react-dom/test-utils";
import {Appointment, AppointmentsDayView} from "../src/Appointment";


describe("Appointment", () => {
    let container;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });
    const render = component =>
    act(() => {
        ReactDOM.createRoot(container).render(component);
    });
    it("renders the customer first name", ()=> {
        const customer = {firstName: "Ashley"};
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Ashley")
    });
    it("renders another customer name", ()=> {
        const customer = {firstName: "Jordan"};
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Jordan")
    });
});
describe("AppointmentsDayView", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    const render = component =>
    act(() => {
        ReactDOM.createRoot(container).render(component);
    });
    it("renders a div with the right id", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(document.getElementById("appointmentsDayView")).not.toBeNull();
    });
    it("renders an ol element to display appointments", () => {

        render(<AppointmentsDayView appointments={[]} />);
        const listElement = document.querySelector("ol");
        expect(listElement).not.toBeNull();
    });
    it("renders an li for each appointment", ()=>{
        const today = new Date();
        const twoAppointments = [
            {startsAt: today.setHours(12,0)},
            {startsAt: today.setHours(13,0)}
        ];
   
   
        render (<AppointmentsDayView appointments={twoAppointments} />);
   
        const listChildren = 
            document.querySelectorAll("ol > li");
        expect(listChildren).toHaveLength(2);
    })
    it("renders the time for each appointment", ()=>{
        const today = new Date();
        const twoAppointments = [
            {startsAt: today.setHours(12,0)},
            {startsAt: today.setHours(13,0)}
        ];
   
   
        render (<AppointmentsDayView appointments={twoAppointments} />);

        const listChildren = document.querySelectorAll("li");
        expect(listChildren[0].textContent).toEqual("12:00");
        expect(listChildren[1].textContent).toEqual("13:00");

    });
    });
