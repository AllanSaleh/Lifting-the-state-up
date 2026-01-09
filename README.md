![Lifting up the state](<Screenshot 2026-01-08 at 9.23.29 PM.png>)

# In-Class Practice: Lifting State Up

## Goal
Create a small React app with **two components** that share data.

---

## What You Are Building

- A form to enter a pet name  
- After submitting:
  - The pet name is displayed  
  - The length of the pet name is shown  
  - The input clears  

---

## Components to Create

You should have **three components**:

- `App`  
- `PetForm` (input + submit)  
- `PetDisplay` (shows pet name and length)  

---

## Steps

1. **Create the Components**  
   - `PetForm.jsx`  
   - `PetDisplay.jsx`  

2. **Build `PetForm`**  
   - Add a text input and a submit button  
   - Make the input a controlled input  
   - When the form is submitted:
     - Save the pet name to the state  
     - Clear the input  

3. **Build `PetDisplay`**  
   - Display the submitted pet name  
   - Display the length of the name  
   - Only show this if a name exists  

4. **Connect Everything**  
   - Render both `PetForm` and `PetDisplay` in `App`  
   - Make the components work together  

---

## Expected Behavior

- User types a pet name  
- Submits the form  
- Pet name and length appear  
- Input clears  

---

## Challenge

- Make sure the app works using **props** between components.