'use server';
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creater: formData.get('name'),
    email: formData.get('email'),
  }

  console.log(meal)
}